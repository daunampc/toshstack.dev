import { EnumField, StringField } from '@/decorators/field.decorators';
import { CommentReactionStatus } from '../enums/comment-reaction-status.enum';

export class ReactionCommentDto {
  @StringField()
  comment_id!: string;

  @EnumField(() => CommentReactionStatus)
  reaction!: CommentReactionStatus;
}
