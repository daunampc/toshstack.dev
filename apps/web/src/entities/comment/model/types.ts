import { User } from '@/entities/user/model';
import { PaginationMeta } from '@/shared/types/pagination.types';

export interface Comment {
  id: string;
  post_id: string;
  author_id: string;
  author: User;
  parent_comment_id: string | null;
  content: string;
  score: number;
  like: {
    count: number;
    me: boolean;
  };
  dislike: {
    count: number;
    me: boolean;
  };
  created_at: string;
  updated_at: string;
  reply_count: number;
  replies: Comment[] | null;
}

export interface CommentPagination {
  data: Comment[];
  meta: PaginationMeta;
}

export interface CommentItemProfileProps {
  comment: Comment;
}
export interface CommentItemProps {
  comment: Comment;
  depth?: number;
  is_reply: boolean;
}
