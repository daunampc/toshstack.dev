import {
  ClassField,
  DateFieldOptional,
  NumberField,
  StringField,
  StringFieldOptional,
} from '@/decorators/field.decorators';
import { UserDto } from '@/modules/users/dto/user.dto';
import { PostEntity } from '../entities/post.entity';
import { CommentEntity } from '@/modules/comments/entities/comment.entity';
import { CommunityEntity } from '@/modules/communities/entities/community.entity';
import { SnowFlakeService } from '@/shareds/services/snowflake.service';
import { PostReactionDto } from '@/modules/comments/dto/post-reaction.dto';
export type PostDtoOptions = Partial<{
  author: UserDto;
  snowFlakeService: SnowFlakeService;
  like: PostReactionDto;
  dislike: PostReactionDto;
  comment_count: number;
}>;
export class PostDto {
  @StringField()
  post_id!: string;

  @StringFieldOptional()
  banner_image!: string | null;

  @StringField()
  title!: string;

  @StringField()
  description!: string;

  @StringField()
  slug!: string;

  @StringField()
  content!: string;

  @NumberField()
  score!: number;

  @NumberField()
  comment_count!: number;

  @ClassField(() => PostReactionDto)
  like!: PostReactionDto;

  @ClassField(() => PostReactionDto)
  dislike!: PostReactionDto;

  @DateFieldOptional()
  created_at!: Date | null;

  @ClassField(() => UserDto)
  author!: UserDto | null;

  @ClassField(() => CommentEntity)
  comments!: CommentEntity[];

  @ClassField(() => CommentEntity)
  community!: CommunityEntity | null;

  constructor(post: PostEntity, options?: PostDtoOptions) {
    this.post_id = options?.snowFlakeService?.toBase36(post.id) ?? post.id;
    this.author = options?.author ?? post.author.toDto();
    this.banner_image = post.banner_image;
    this.title = post.title;
    this.description = post.description;
    this.slug = post.slug;
    this.content = post.content;
    this.score = post.score;
    this.comments = post.comments;
    this.community = post.community;
    this.created_at = post.created_at;
    this.comment_count = options?.comment_count ?? 0;
    this.like = options?.like ?? {
      count: 0,
      me: false,
    };
    this.dislike = options?.dislike ?? {
      count: 0,
      me: false,
    };
  }
}
