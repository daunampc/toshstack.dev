import { RoleType } from '@server/constants/role-type';

export interface AccessTokenData {
  role: RoleType;
  user_id: string;
}
