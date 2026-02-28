import axiosClient from '@/shared/api/http';
import { CreatePostFormType } from '../model/types';

export async function createPostAction(values: CreatePostFormType) {
  const res = await axiosClient.post('/posts', {
    data: values,
  });
  return res;
}
