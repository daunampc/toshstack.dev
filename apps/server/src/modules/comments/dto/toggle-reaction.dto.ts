import { EnumField, StringField } from '@/decorators/field.decorators';
import { CommentReactionStatus } from '@/modules/comment-reactions/enums/comment-reaction-status.enum';

export class ToggleReactionDto {
  @StringField()
  comment_id!: string;

  @EnumField(() => CommentReactionStatus)
  reaction!: CommentReactionStatus;
}
