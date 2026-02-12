import { IconType } from 'react-icons/lib';
export type SettingUserKey = 'preference' | 'email' | 'notification';
export type SettingPreferences =
  | 'language'
  | 'contentLanguage'
  | 'showMatureContent'
  | 'blurMatureContent'
  | 'showRecommendations'
  | 'defaultFeedSort'
  | 'autoplayMedia'
  | 'reduceMotion'
  | 'syncMotionWithOS'
  | 'openPostsInNewTab'
  | 'useCommunityThemes'
  | 'defaultMarkdownEditor'
  | 'keyboardShortcuts';
export type SettingNotification =
  | 'communityNotifications'
  | 'webPushNotifications'
  | 'chatMessages'
  | 'chatRequests'
  | 'mentions'
  | 'commentsOnPosts'
  | 'upvotesOnPosts'
  | 'upvotesOnComments'
  | 'repliesToComments'
  | 'activityOnComments'
  | 'newFollower'
  | 'awardsReceived'
  | 'postsYouFollow'
  | 'commentsYouFollow'
  | 'keywordAlerts'
  | 'achievementUpdates'
  | 'streakReminders'
  | 'postInsights'
  | 'trendingPosts'
  | 'featuredContent'
  | 'breakingNews'
  | 'announcements'
  | 'cakeDay'
  | 'adminNotifications'
  | 'disabledAdminNotifications';

export interface SettingItem {
  category: SettingUserKey;
  default: string | boolean;
  key: string;
  value: string;
  kind: 'enum' | 'boolean';
  values: string[];
}

export type UpdateSettingUserError = 'UNAUTHORIZED' | 'INVALID_DATA' | 'UNKNOWN_ERROR';

export interface OptionNotification {
  // name: 'Off' | 'Low' | 'Frequent' | 'All In';
  // value: 'off' | 'low' | 'frequent' | 'all-in';
  name: string;
  value: string;

  icon?: IconType;
  description?: string;
}
export type UserSettingUIOptions = {
  label: string;
  value: string;
};
export type ToggleUI = {
  key: string;
  label: string;
  control: 'toggle';
  description: string | null;
  group: string;
  section: string;
};

export type SelectUI = {
  key: string;
  label: string;
  control: 'select';
  description: string | null;
  group: string;
  options: UserSettingUIOptions[];
  section: string;
};

export type UserSettingUI = ToggleUI | SelectUI;

export type UserSettingItem =
  | {
      type: 'boolean';
      default: boolean;
      ui: UserSettingUI | null;
    }
  | {
      type: 'enum';
      default: string;
      ui: UserSettingUI | null;
    };

export type SettingData<K extends string> = {
  [P in K]: UserSettingItem;
};
export type UserSettingMap = Record<string, UserSettingItem>;
