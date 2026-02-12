import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { authKeys } from './auth.keys';
import { fetchMe } from './auth.api';
import { useAuth } from 'app/_providers/auth-provider';

export function useMeQuery() {
  const user = useAuth();
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: fetchMe,
    placeholderData: keepPreviousData,
    initialData: user,
    retry: false,
  });
}
