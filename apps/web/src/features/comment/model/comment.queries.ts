'use client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getCommentByPost } from './comment.api';
import { CommentListPostParams } from './types';
import { commentKeys } from './comment.keys';

export function useCommentPostQuery(params: CommentListPostParams & { enabled: boolean }) {
  const { enabled, ...queryParams } = params;

  return useQuery({
    queryKey: commentKeys.listByPost(queryParams),
    queryFn: () => getCommentByPost(queryParams),
    placeholderData: keepPreviousData,
    enabled,
  });
}
