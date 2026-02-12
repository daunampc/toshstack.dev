import { ACCOUNT_SETTING_SCHEMA } from '../schemas/user-settings/account-setting.schema';
import { NOTIFICATION_SETTING_SCHEMA } from '../schemas/user-settings/notification-setting.schema';
import { PREFERENCE_SETTING_SCHEMA } from '../schemas/user-settings/preference-setting.schema';
import { PROFILE_SETTING_SCHEMA } from '../schemas/user-settings/profile-setting.schema';

export type SettingOptionsUI = {
  label: string;
  value: string;
};
export type SettingDefinitionKey = keyof (typeof PREFERENCE_SETTING_SCHEMA &
  typeof ACCOUNT_SETTING_SCHEMA &
  typeof PROFILE_SETTING_SCHEMA &
  typeof NOTIFICATION_SETTING_SCHEMA);

export type SettingDefinitionControl = 'select' | 'toggle' | 'string';
export type SettingDefinitionMeta = {
  key: SettingDefinitionKey;
  //'account' | 'profile' | 'email' | 'preference'
  group: string;
  control: SettingDefinitionControl;
  section: string;
  description?: string | null;
  label: string;
  options?: SettingOptionsUI[] | null;
};
export type SettingDefinitionSchema = {
  type: string;
  default: string;
  values: string[];
};
export type SettingUserData = {
  type: string;
  default: string | null;
  ui: SettingDefinitionMeta | null;
};

export type SettingUserDataMap = Record<string, SettingUserData>;

export interface PatchSettingData {
  key: SettingDefinitionKey;
  value: string | boolean;
}
