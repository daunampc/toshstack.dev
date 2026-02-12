import { AbstractEntity } from '@/common/abstract.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { UserDto, UserDtoOptions } from '../dto/user.dto';
import { PostReactionEntity } from '@/modules/post-reactions/entities/post-reaction.entity';
import { CommentReactionEntity } from '@/modules/comment-reactions/entities/comment-reaction.entity';
import { UseDto } from '@/decorators/use-dto.decorator';
import { UserRoleEntity } from '@/modules/roles/entities/user-role.entity';
import { ProfileEntity } from '@/modules/profiles/entities/profile.entity';
import { WalletEntity } from '@/modules/wallets/entities/wallet.entity';
import { UserSettingEntity } from '@/modules/settings/entities/user-setting.entity';

@Entity('users')
@UseDto(UserDto)
@Index(['handle', 'id'])
@Unique(['email', 'handle'])
export class UserEntity extends AbstractEntity<UserDto, UserDtoOptions> {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  handle!: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.user, {
    cascade: ['insert'],
    onDelete: 'CASCADE',
  })
  profile!: ProfileEntity;

  @Column({ unique: true, type: 'varchar', length: 255 })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'varchar', length: 155, nullable: true })
  ip!: string | null;

  @Column({ type: 'boolean', default: true })
  is_active!: boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  last_seen_at!: Date;

  @Column({ default: 1, select: false })
  version!: number;

  @Column({ default: false })
  two_factor_enabled!: boolean;

  @OneToMany(() => UserRoleEntity, (ur) => ur.user)
  roles!: UserRoleEntity[];

  @OneToMany(() => PostReactionEntity, (reaction) => reaction.user)
  post_reactions!: PostReactionEntity[];

  @OneToMany(() => CommentReactionEntity, (c_reaction) => c_reaction.user)
  comment_reactions!: CommentReactionEntity[];

  @OneToMany(() => UserSettingEntity, (user_stt) => user_stt.user)
  user_settings!: UserSettingEntity[];
  @OneToOne(() => WalletEntity, (wallet) => wallet.user, {
    cascade: true,
  })
  wallet!: WalletEntity;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
