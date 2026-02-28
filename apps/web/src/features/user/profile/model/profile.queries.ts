import { userKeys } from '@/entities/user/model';
import { getUserProfile } from '@/shared/api/profile.api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export function useProfileQuery(handle: string) {
  return useQuery({
    queryKey: userKeys.detail(handle),
    queryFn: () => getUserProfile(handle),
    placeholderData: keepPreviousData,
    retry: false,
  });
}
