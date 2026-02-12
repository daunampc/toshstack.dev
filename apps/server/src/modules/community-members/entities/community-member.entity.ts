import { CommunityEntity } from '@/modules/communities/entities/community.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommunitryMemberRole } from '../enums/community-member-role.enum';
import { CommunityMemberStatus } from '../enums/community-member-status.enum';
import { AbstractEntity } from '@/common/abstract.entity';
import { UserEntity } from '@/modules/users/entities/user.entity';

@Entity('community_members')
@Index(['id'])
export class CommunityMemberEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @PrimaryColumn({ type: 'uuid' })
  community_id!: string;

  @PrimaryColumn({ type: 'uuid' })
  user_id!: string;

  @ManyToOne(() => CommunityEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'community_id' })
  community!: CommunityEntity;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'enum', enum: CommunitryMemberRole, default: 'member' })
  role!: 'member' | 'mod' | 'admin';

  @Column({ type: 'enum', enum: CommunityMemberStatus, default: 'active' })
  status!: 'active' | 'banned';

  @CreateDateColumn({ name: 'joined_at' })
  joined_at!: Date;
}
