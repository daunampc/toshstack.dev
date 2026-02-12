import { CommentReactionStatus } from '../enums/comment-reaction-status.enum';

export interface TooggleCommentReaction {
  comment_id: string;
  user_id: string;
  reaction: CommentReactionStatus;
}
