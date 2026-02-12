import { Comment } from '@/entities/comment/model';
export type CommentSortBy = 'best' | 'top' | 'new' | 'old';

export type CommentReaction = 'LIKE' | 'DISLIKE';

export interface CommentLikeProps {
  comment: Comment;
}

export interface CommentReactionPayload {
  comment_id: string;
  reaction: CommentReaction;
}

export interface CommentListPostParams {
  post_id: string;
  page: number;
  sort_by?: CommentSortBy;
}

export interface CommentSortByProps {
  value: string;
  onChange: (value: CommentSortBy) => void;
}
