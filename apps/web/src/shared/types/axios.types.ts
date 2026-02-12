import { ApiError } from 'next/dist/server/api-utils';

export type Result<T> = { ok: true; data: T } | { ok: false; error: ApiError };
