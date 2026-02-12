import { authRegister } from '@/entities/auth/api';
import { RegisterApiResult, RegisterPayload } from '@/entities/auth/model';
import { createMutation } from '@/shared/lib/tanstack-query/create-mutation';

export const useRegister = createMutation<RegisterApiResult, RegisterPayload>(authRegister, {});
