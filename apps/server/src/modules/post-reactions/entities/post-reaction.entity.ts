import { AbstractEntity } from '@server/common/abstract.entity';
import { PostEntity } from '@server/modules/posts/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PostReactionStatus } from '../enums/post-reaction-status.enum';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Entity('post_reactions')
@Index(['id'])
@Unique(['post_id', 'user_id'])
export class PostReactionEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @PrimaryColumn({ type: 'bigint' })
  post_id!: string;

  @PrimaryColumn({ type: 'uuid' })
  user_id!: string;

  @ManyToOne(() => PostEntity, (post) => post.reactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post!: PostEntity;

  @ManyToOne(() => UserEntity, (user) => user.post_reactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'enum', enum: PostReactionStatus })
  reaction!: PostReactionStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
