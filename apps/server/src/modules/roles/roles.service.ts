import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { In, Repository } from 'typeorm';
import { UserRoleEntity } from './entities/user-role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepo: Repository<RoleEntity>,

    @InjectRepository(UserRoleEntity)
    private readonly userRoleRepo: Repository<UserRoleEntity>,
  ) {}

  async userHasAnyRole(user_id: string, role_keys: string[]) {
    const count = await this.userRoleRepo.count({
      where: {
        user: {
          id: user_id,
        },
        role: {
          key: In(role_keys),
        },
      },
    });
    console.log('COUNT ROLE : ', count);
    return count > 0;
  }
}
