import { ApiError } from '@/shared/types/api-error.types';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

export function createMutation<TData, TVariables, TError = ApiError>(
  mutationFn: (variables: TVariables) => Promise<TData>
) {
  return function useGeneratedMutation(options?: UseMutationOptions<TData, TError, TVariables>) {
    return useMutation<TData, TError, TVariables>({
      mutationFn,
      ...options,
    });
  };
}
