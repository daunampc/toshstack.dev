'use server';

import { serverFetch } from '@/shared/api/server-fetch';
import { User } from './types';

export const getSession = async () => {
  const data = await serverFetch<User>('/auth/me');
  return data;
};
