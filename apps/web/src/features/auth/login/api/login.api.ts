import axiosClient from '@/shared/api/http';
import { LoginPayload } from '../model/types';

export async function loginAction(values: LoginPayload) {
  const res = await axiosClient.post('/auth/login', values);
  return res.data;
}
