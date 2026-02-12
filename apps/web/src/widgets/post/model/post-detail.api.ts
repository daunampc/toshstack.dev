import { serverFetch } from '@/shared/api/server-fetch';
import { Post } from '@/entities/post/model';
import { PostDetailParams } from './types';

export const fetchPostBySlug = async (params: PostDetailParams): Promise<Post | null> => {
  const data = await serverFetch<Post>(`/posts/detail/${params.slug}`, {
    method: 'GET',
  });
  return data;
};
