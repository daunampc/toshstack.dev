import { Post } from '@/entities/post/model';
import { Comment } from '@/entities/comment/model';
import { PaginationMeta } from '@/shared/types/pagination.types';

export interface FilterParams {
  page: number;
  limit: number;

  q?: string;
}

export interface PostFilterParams extends Partial<FilterParams> {
  handle: string;
}
export interface PostDetailParams {
  slug: string;
}

export type PostLayout = 'vertical' | 'horizontal';
export interface PostCardProps {
  layout: PostLayout;
  post: Post;
}

export interface PostListUserProps extends PostFilterParams {}
export interface PostListResponse {
  data: Post[];
  meta: PaginationMeta;
}

export interface PostDetailHeaderProps {
  post: Post;
}
export interface PostDetailProps {
  slug: string;
}

export interface PostDetailProfileProps {
  post: Post;
}

export interface CommentItemProps {
  comment: Comment;
  depth: number;
  is_reply: boolean;
}
export interface GetCommentPostPayload {
  post_id: string;
}

export interface PostDetailCommentProps {
  post: Post;
}
