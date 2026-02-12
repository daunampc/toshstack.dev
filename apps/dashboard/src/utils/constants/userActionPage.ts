export const userActionPage = {
  VIEW: 'view',
  EDIT: 'edit',
  UPDATE: 'update',
  DELETE: 'delete',
} as const;

export type UserActionPage =
  (typeof userActionPage)[keyof typeof userActionPage];
