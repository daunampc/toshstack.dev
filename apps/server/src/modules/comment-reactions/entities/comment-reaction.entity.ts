import { CommentEntity } from '@server/modules/comments/entities/comment.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CommentReactionStatus } from '../enums/comment-reaction-status.enum';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Entity('comment_reactions')
@Unique(['comment_id', 'user_id'])
export class CommentReactionEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id!: string;
  @PrimaryColumn({ type: 'bigint' })
  comment_id!: string;

  @PrimaryColumn({ type: 'uuid' })
  user_id!: string;

  @ManyToOne(() => CommentEntity, (c) => c.reactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'comment_id' })
  comment!: CommentEntity;

  @ManyToOne(() => UserEntity, (u) => u.comment_reactions)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'enum', enum: CommentReactionStatus })
  reaction!: CommentReactionStatus;
}
