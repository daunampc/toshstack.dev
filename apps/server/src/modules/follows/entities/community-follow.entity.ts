import { CommunityEntity } from '@server/modules/communities/entities/community.entity';
import { UserEntity } from '@server/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';

@Entity('community_follows')
@Unique(['user_id', 'community_id'])
@Index(['user_id', 'community_id', 'id'])
export class CommunityFollowEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column('uuid')
  user_id!: string;

  @Column('uuid')
  community_id!: string;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @ManyToOne(() => CommunityEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'community_id' })
  community!: CommunityEntity;

  @Column({ default: true })
  is_following!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
