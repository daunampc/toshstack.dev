import { User } from '@/entities/user/model';
import { serverFetch } from '@/shared/api/server-fetch';
import {
  AuthVeirfyMe,
  LoginApiResult,
  LoginPayload,
  LogoutApiResult,
  RegisterApiResult,
  RegisterPayload,
} from '../model';
import axiosClient from '@/shared/api/http';
import { handleApiError } from '@/shared/lib/api/handle-api-error';
export const fetchMe = async (): Promise<User | null> => {
  const data = await serverFetch<User>('/auth/me');
  return data;
};

export const authLogin = async (payload: LoginPayload): Promise<LoginApiResult> => {
  try {
    const res = await axiosClient.post<LoginApiResult>('/auth/login', payload);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const authRegister = async (payload: RegisterPayload): Promise<RegisterApiResult> => {
  try {
    const res = await axiosClient.post<RegisterApiResult>('/auth/register', payload);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
export const authLogout = async (): Promise<LogoutApiResult> => {
  try {
    const res = await axiosClient.post<LogoutApiResult>('/auth/logout');
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const authVerifyMe = async (): Promise<AuthVeirfyMe | null> => {
  const result = await serverFetch<AuthVeirfyMe>('/auth/verify');
  return result;
};
