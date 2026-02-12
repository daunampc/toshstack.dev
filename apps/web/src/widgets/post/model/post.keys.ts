import { PostDetailParams, PostFilterParams } from './types';

export const postKeys = {
  all: ['post'] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (params: PostDetailParams) => [postKeys.details(), params] as const,

  lists: () => [postKeys.all, 'list'] as const,
  listByUser: (params: PostFilterParams) => [postKeys.all, 'user', params] as const,
};
