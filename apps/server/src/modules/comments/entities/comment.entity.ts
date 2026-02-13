import { AbstractEntity } from '@server/common/abstract.entity';
import { CommentReactionEntity } from '@server/modules/comment-reactions/entities/comment-reaction.entity';
import { PostEntity } from '@server/modules/posts/entities/post.entity';
import { UserEntity } from '@server/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments')
@Index(['id'])
@Unique(['content'])
export class CommentEntity extends AbstractEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({ type: 'bigint' })
  post_id!: string;

  @ManyToOne(() => PostEntity, (p) => p.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post!: PostEntity;

  @Column({ type: 'uuid', name: 'author_id' })
  author_id!: string;

  @ManyToOne(() => UserEntity, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'author_id' })
  author!: UserEntity;

  @Column({ type: 'bigint', nullable: true })
  parent_comment_id!: string | null;

  @ManyToOne(() => CommentEntity, (e) => e.replies, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'parent_comment_id' })
  parent!: CommentEntity | null;

  @OneToMany(() => CommentEntity, (c) => c.parent)
  replies!: CommentEntity[];

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'int', default: 0, name: 'score' })
  score!: number;

  @OneToMany(() => CommentReactionEntity, (reaction) => reaction.comment)
  reactions!: CommentReactionEntity[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date | null;
}
