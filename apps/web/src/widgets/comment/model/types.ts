import { Comment } from '@/entities/comment/model';

export interface GetCommentPostPayload {
  post_id: string;
}

export interface CommentListProps {
  comments: Comment[] | null;
}

export interface CommentListPostProps {
  post_id: string;
}

export interface CommentPaginationProps {
  total_pages: number;
  page: number;
  onChangePage: (page: number) => void;
}
