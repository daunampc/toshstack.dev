import axiosClient from '@/shared/api/http';
import { handleApiError } from '@/shared/lib/api/handle-api-error';
import { CommentListPostParams, CommentReactionPayload } from './types';
import { CommentPagination } from '@/entities/comment/model';

export const toggleCommentReaction = async (payload: CommentReactionPayload) => {
  try {
    const res = await axiosClient.patch('/comment-reactions', payload);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getCommentByPost = async (params: CommentListPostParams) => {
  const { post_id, page } = params;
  try {
    const res = await axiosClient.get<CommentPagination>(
      `/comments?post_id=${post_id}&page=${page}&sort_by=${params.sort_by ?? 'new'}`
    );
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
