'use server';
import { cookies } from 'next/headers';

const API_URL = process.env.API_URL!;
type NextFetchOptions = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};
export const serverFetch = async <T>(
  url: string,
  options: NextFetchOptions = {}
): Promise<T | null> => {
  try {
    const cookieStore = cookies();
    const res = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        ...(options.headers ?? {}),
        Cookie: cookieStore.toString(),
      },
    });
    if (!res.ok) return null;

    return res.json() as Promise<T>;
  } catch (error) {
    throw error;
  }
};
