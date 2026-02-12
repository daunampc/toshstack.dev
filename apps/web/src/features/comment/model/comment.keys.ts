import { CommentListPostParams } from './types';

export const commentKeys = {
  all: ['comment'] as const,
  listByPost: (params: CommentListPostParams) => [commentKeys.all, 'comment-post', params] as const,
};
