import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { UserRegisterDto } from '../auth/dto/user-register.dto';
import {
  ConflictAppException,
  NotFoundAppException,
} from '@/exceptions/http.exception';
import { hashPassword } from '@/common/utils';
import { MailerService } from '../mailer/mailer.service';
import { RoleEntity } from '../roles/entities/role.entity';
import { UserRoleEntity } from '../roles/entities/user-role.entity';
import { WalletStatus } from '../wallets/enums/wallet-status.enum';
import { WalletCurrent } from '../wallets/enums/wallet-current.enum';
import { FollowsService } from '../follows/follows.service';
import { UserFollowDto } from '../follows/dto/user-follow.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly mailerService: MailerService,
    private readonly followsService: FollowsService,
  ) {}

  async updateEmail(email: string, user_id: string) {
    return await this.userRepo.update(
      {
        id: user_id,
      },
      {
        email,
      },
    );
  }
  async getPublicProfileByHandle(handle: string): Promise<{
    user: UserEntity;
    user_follow: UserFollowDto;
  }> {
    return await this.getMeUser({ handle });
  }
  /**
   * Finds and returns a single user matching the given conditions.
   *
   * @param findData - Conditions used to identify the user
   * @returns The matched UserEntity or null if not found
   */
  async getMeUser(findData: FindOptionsWhere<UserEntity>): Promise<{
    user: UserEntity;
    user_follow: UserFollowDto;
  }> {
    const user = await this.userRepo.findOne({
      where: findData,
      relations: {
        profile: {
          country: true,
        },
      },
    });

    if (!user)
      throw new NotFoundAppException('USER_NOT_FOUND', 'User not found');

    const followerStats = await this.followsService.followerStats(user.id);
    const followingCount = await this.followsService.followingCount(user.id);

    return {
      user,
      user_follow: {
        follower: {
          count: followerStats.count,
          me: followerStats.me,
        },
        following: followingCount,
      },
    };
  }

  /**
   * Creates a new user account within a transaction.
   * - Checks for existing email
   * - Hashes the password
   * - Sends registration confirmation email
   *
   * @param userRegisterDto - User registration data
   * @returns The newly created UserEntity
   * @throws ConflictAppException if email already exists
   */
  async createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity> {
    return this.dataSource.transaction(async (manager) => {
      const existed = await manager.findOne(UserEntity, {
        where: {
          email: userRegisterDto.email,
        },
      });
      if (existed)
        throw new ConflictAppException(
          'EMAIL_ALREADY_EXISTED',
          'Email already existed',
        );
      const password = await hashPassword(userRegisterDto.password);
      const user = manager.create(UserEntity, {
        ...userRegisterDto,
        password,
        handle: `@${userRegisterDto.email.split('@')[0]}`,
        profile: {
          display_name: userRegisterDto.email.split('@')[0] || 'Account New',
        },
        wallet: {
          status: WalletStatus.SUSPENDED,
          version: 1,
          currency: WalletCurrent.USD,
        },
      });
      await manager.save(user);
      const role = await manager.findOneOrFail(RoleEntity, {
        where: {
          key: 'member',
        },
      });
      const memberRole = manager.create(UserRoleEntity, {
        user,
        role,
      });
      await manager.save(memberRole);

      //     await this.mailerService.confirmRegister(user.email, user);

      return user;
    });
  }

  async findOne(
    findData: FindOptionsWhere<UserEntity>,
  ): Promise<UserEntity | null> {
    const user = await this.userRepo.findOne({
      where: findData,
      relations: {
        profile: {
          country: true,
        },
      },
    });
    if (!user) return null;
    return user;
  }
  async updateIp(user_id: string, ip: string | null): Promise<boolean> {
    const result = await this.userRepo.update(
      {
        id: user_id,
      },
      {
        ip,
      },
    );
    if (!result.affected || result.affected !== 1) {
      return false;
    }
    return true;
  }
}
