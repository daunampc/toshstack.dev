import type { IconType } from 'react-icons/lib';

export type GeneralSettingTab = 'general' | 'security' | 'account';
export interface TabSettingHeader {
  icon: IconType;
  key: GeneralSettingTab;
  name: string;
}
