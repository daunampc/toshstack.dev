import {
  ClassField,
  ClassFieldOptional,
  DateField,
  NumberFieldOptional,
  StringField,
} from '@server/decorators/field.decorators';
import { CommentReactionDto } from './comment-reaction.dto';
import { CommentEntity } from '../entities/comment.entity';
import { UserDto } from '@server/modules/users/dto/user.dto';
import { SnowFlakeService } from '@server/shareds/services/snowflake.service';

export class CommentDto {
  @StringField()
  id!: string;

  @ClassFieldOptional(() => UserDto)
  author!: UserDto;

  @StringField()
  parent_comment_id!: string | null;

  @StringField()
  content!: string;

  @DateField()
  created_at!: Date;

  @DateField()
  updated_at!: Date;

  @ClassFieldOptional(() => CommentReactionDto)
  like!: CommentReactionDto;

  @ClassFieldOptional(() => CommentReactionDto)
  dislike!: CommentReactionDto;

  @ClassField(() => CommentDto)
  replies!: CommentDto[];

  @NumberFieldOptional()
  reply_count!: number;

  constructor(
    comment: CommentEntity,
    like: CommentReactionDto,
    dislike: CommentReactionDto,
    replies: CommentDto[] = [],
    reply_count: number = 0,
  ) {
    this.id = comment.id;
    this.author = comment.author.toDto();
    this.parent_comment_id = comment.parent_comment_id;
    this.content = comment.content;
    this.created_at = comment.created_at;
    this.updated_at = comment.updated_at;
    this.like = new CommentReactionDto(like.count, like.me);
    this.dislike = new CommentReactionDto(dislike.count, dislike.me);
    this.replies = replies;
    this.reply_count = reply_count;
  }
}
