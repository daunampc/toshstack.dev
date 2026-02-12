import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { userKeys } from './user.keys';
import { getUserProfile } from './user.api';

export function useUserProfileQuery(handle: string) {
  return useQuery({
    queryKey: userKeys.detail(handle),
    queryFn: () => getUserProfile(handle),
    placeholderData: keepPreviousData,
    retry: false,
  });
}
