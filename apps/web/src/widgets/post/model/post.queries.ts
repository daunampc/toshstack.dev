import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { PostDetailParams, PostFilterParams } from './types';
import { postKeys } from './post.keys';
import { fetchPostByUser } from './post-list.api';
import { fetchPostBySlug } from './post-detail.api';

export function useUserPostsQuery(filter: PostFilterParams) {
  return useQuery({
    queryKey: postKeys.listByUser(filter),
    queryFn: () => fetchPostByUser(filter),
    placeholderData: keepPreviousData,
    retry: true,
  });
}
export function usePostDetailQuery(params: PostDetailParams) {
  return useQuery({
    queryKey: postKeys.detail(params),
    queryFn: () => fetchPostBySlug(params),
    placeholderData: keepPreviousData,
    retry: true,
  });
}
