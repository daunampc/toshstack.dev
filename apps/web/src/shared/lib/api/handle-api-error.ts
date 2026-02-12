// lib/api/handleApiError.ts
import { ApiError } from '@/shared/types/api-error.types';
import { isAxiosError } from 'axios';

export function handleApiError(error: unknown): never {
  if (isAxiosError(error)) {
    const data = error.response?.data as ApiError;

    throw {
      code: data?.code ?? 'UNKNOWN_ERROR',
      details: data?.details,
      message: data.message,
      meta: data.meta,
      success: data.success,
    } satisfies ApiError;
  }

  throw {
    code: 'UNKNOWN_ERROR',
  };
}
