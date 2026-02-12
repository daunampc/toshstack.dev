export interface CommentReaction {
  count: number;
  me: boolean;
}

export interface CommentReactionLike {
  like_count: number;
  my_like: boolean;
}
export interface CommentReactionDislike {
  dislike_count: number;
  my_dislike: boolean;
}
