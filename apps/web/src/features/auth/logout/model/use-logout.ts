import { authLogout } from '@/entities/auth/api';
import { LogoutApiResult } from '@/entities/auth/model';
import { createMutation } from '@/shared/lib/tanstack-query/create-mutation';

export const useLogout = createMutation<LogoutApiResult, unknown>(authLogout, {
  onSuccess: () => {
    window.location.reload();
  },
});
