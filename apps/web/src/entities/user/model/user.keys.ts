export const userKeys = {
  all: ['user'] as const,

  me: () => [...userKeys.all, 'me'] as const,

  list: (filter?: { page?: number }) => [...userKeys.all, 'list', filter] as const,
  detail: (handle: string) => [...userKeys.all, 'detail', handle] as const,
};

export type UserQueryKey =
  | ReturnType<typeof userKeys.me>
  | ReturnType<typeof userKeys.list>
  | ReturnType<typeof userKeys.detail>;
