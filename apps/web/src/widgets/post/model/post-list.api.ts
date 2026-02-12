import { serverFetch } from '@/shared/api/server-fetch';
import { PostFilterParams, PostListResponse } from './types';

export const fetchPostByUser = async (filter: PostFilterParams) => {
  const data = await serverFetch<PostListResponse>(`/posts/user?handle=${filter.handle}`, {
    method: 'GET',
  });
  return data;
};
