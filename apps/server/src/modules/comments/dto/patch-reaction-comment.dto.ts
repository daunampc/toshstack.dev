import { EnumField, StringField } from '@server/decorators/field.decorators';
import { CommentReactionStatus } from '@server/modules/comment-reactions/enums/comment-reaction-status.enum';

export class ToggleCommentReaction {
  @StringField()
  comment_id!: string;

  @EnumField(() => CommentReactionStatus)
  reaction!: CommentReactionStatus;
}
