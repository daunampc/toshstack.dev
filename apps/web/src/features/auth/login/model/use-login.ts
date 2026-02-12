import { authLogin } from '@/entities/auth/api';
import { LoginApiResult, LoginPayload } from '@/entities/auth/model';
import { createMutation } from '@/shared/lib/tanstack-query/create-mutation';
export const useLogin = createMutation<LoginApiResult, LoginPayload>(authLogin);
