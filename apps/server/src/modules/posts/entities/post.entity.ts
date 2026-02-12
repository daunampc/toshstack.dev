import { AbstractEntity } from '@/common/abstract.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { PostStatus } from '../enums/post-status.enum';
import { PostVisibility } from '../enums/post-visibility.enum';
import { CommunityEntity } from '@/modules/communities/entities/community.entity';
import { PostReactionEntity } from '@/modules/post-reactions/entities/post-reaction.entity';
import { CommentEntity } from '@/modules/comments/entities/comment.entity';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { PostDto, PostDtoOptions } from '../dto/post.dto';
import { UseDto } from '@/decorators/use-dto.decorator';
import { PostTaxonomyEntity } from './post-taxonomy.entity';

@Entity('posts')
@UseDto(PostDto)
@Index(['id', 'slug'])
@Unique(['slug'])
export class PostEntity extends AbstractEntity<PostDto, PostDtoOptions> {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({ type: 'uuid' })
  author_id!: string;

  @ManyToOne(() => UserEntity, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'author_id' })
  author!: UserEntity;

  @Column({ type: 'text', nullable: true })
  banner_image!: string | null;

  @Column({ type: 'varchar', length: 255 })
  slug!: string;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'int', default: 0, name: 'score' })
  score!: number;

  @ManyToOne(() => CommunityEntity, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'community_id' })
  community!: CommunityEntity | null;

  @OneToMany(() => PostReactionEntity, (reaction) => reaction.post)
  reactions!: PostReactionEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments!: CommentEntity[];

  @Column({ type: 'boolean', default: false })
  is_locked!: boolean;

  @Column({ type: 'enum', enum: PostStatus, default: 'draft' })
  is_published!: PostStatus;

  @Column({ type: 'enum', enum: PostVisibility, default: 'public' })
  visibility!: PostVisibility;

  @Column({ type: 'boolean', default: true })
  allow_comment!: boolean;

  @Column({ default: false })
  is_nsfw!: boolean;

  @Column({ default: false })
  is_pinned!: boolean;

  @OneToOne(() => PostTaxonomyEntity, (pt) => pt.post, { cascade: true })
  post_taxonomy!: PostTaxonomyEntity;

  @Column({ type: 'text', array: true, nullable: true })
  tags!: string[] | null;

  @Column({
    type: 'timestamptz',
    nullable: true,
    default: null,
  })
  published_at!: Date | null;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deleted_at!: Date | null;

  @CreateDateColumn()
  created_at!: Date | null;

  @UpdateDateColumn()
  updated_at!: Date | null;
}
