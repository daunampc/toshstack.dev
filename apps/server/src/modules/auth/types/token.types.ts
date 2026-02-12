import { RoleType } from '@/constants/role-type';

export interface AccessTokenData {
  role: RoleType;
  user_id: string;
}
