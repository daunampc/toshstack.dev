import { User } from '@/entities/user/model';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  re_password: string;
}

export type LoginApiResult = {
  success: boolean;
  data: User;
};

export type LogoutApiResult = {
  ok: boolean;
};
export type RegisterApiResult = LoginApiResult;

export type AuthVeirfyMe = {
  ok: boolean;
};
