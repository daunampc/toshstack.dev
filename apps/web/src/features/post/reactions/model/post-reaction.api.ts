import axiosClient from '@/shared/api/http';
import { CreatePostReactionPayload } from './types';
import { handleApiError } from '@/shared/lib/api/handle-api-error';

export const createPostReaction = async (payload: CreatePostReactionPayload) => {
  try {
    const res = await axiosClient.post(`/posts/${payload.post_id}/reaction`, {
      reaction: payload.type,
    });
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
