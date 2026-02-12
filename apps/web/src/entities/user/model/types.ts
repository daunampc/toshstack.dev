import { Profile } from '@/entities/profile/model';
import { SettingItem } from '@/entities/setting/model';

export interface UserAvatarProps {
  src?: string | null;
}
export interface User {
  user_id: string;
  email: string;
  handle: string;
  two_factor_enabled: boolean;
  profile: Profile;
  settings: SettingItem[];
  user_follow: UserFollow | null;
  created_at: string;
}

export type FollowData = {
  count: number;
  me: boolean;
};
export type UserFollow = {
  follower: FollowData;
  following: number;
};

export interface UserAboutProps {
  about: string | null;
  isOwner: boolean;
}
