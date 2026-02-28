import { User } from '@/entities/user/model';
import axiosClient from './http';
import { handleApiError } from '../lib/api/handle-api-error';

export const getUserProfile = async (handle: string): Promise<User | null> => {
  try {
    const res = await axiosClient.get<User>(`/users/${handle}`);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
