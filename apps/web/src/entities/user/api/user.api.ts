import axiosClient from '@/shared/api/http';
import { User } from '../model';
import { handleApiError } from '@/shared/lib/api/handle-api-error';

export const getUserProfile = async (handle: string): Promise<User | null> => {
  try {
    const res = await axiosClient.get<User>(`/users/${handle}`);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
