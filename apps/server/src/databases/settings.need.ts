import { SettingDefinitionEntity } from '@server/modules/settings/entities/setting-definition.entity';
import { SettingDefinitionMeta } from '@server/modules/settings/types/setting-definition.types';
import { DataSource } from 'typeorm';

export const DEFAULT_SETTING_DEFINITION: SettingDefinitionMeta[] = [
  {
    key: 'preference.language',
    group: 'preference',
    section: 'language',
    control: 'select',
    label: 'Interface language',
    description: 'Language used for UI',
    options: [
      { value: 'english', label: 'English' },
      { value: 'vietnamese', label: 'Tiếng Việt' },
    ],
  },
  {
    key: 'preference.contentLanguage',
    group: 'preference',
    section: 'language',
    control: 'select',
    label: 'Content language',
    description: 'Language used for feeds and recommendations',
    options: [
      { value: 'english', label: 'English' },
      { value: 'vietnamese', label: 'Tiếng Việt' },
    ],
  },

  // 🔞 Content
  {
    key: 'preference.showMatureContent',
    group: 'preference',
    section: 'content',
    control: 'toggle',
    label: "Show mature content (I'm over 18)",
    description:
      'See Not Safe for Work mature and adult content in your feeds and search results',
  },
  {
    key: 'preference.blurMatureContent',
    group: 'preference',
    section: 'content',
    control: 'toggle',
    label: 'Blur mature (18+) images and media',
  },
  {
    key: 'preference.showSensitiveWarning',
    group: 'preference',
    section: 'content',
    control: 'toggle',
    label: 'Show sensitive content warning',
  },

  // 📰 Feed
  {
    key: 'preference.showRecommendations',
    group: 'preference',
    section: 'feed',
    control: 'toggle',
    label: 'Show recommendations in home feed',
  },
  {
    key: 'preference.defaultFeedSort',
    group: 'preference',
    section: 'feed',
    control: 'select',
    label: 'Default feed sort',
    options: [
      { value: 'hot', label: 'Hot' },
      { value: 'new', label: 'New' },
      { value: 'top', label: 'Top' },
    ],
  },
  {
    key: 'preference.autoplayMedia',
    group: 'preference',
    section: 'feed',
    control: 'toggle',
    label: 'Autoplay media',
  },

  // ♿ Accessibility
  {
    key: 'preference.reduceMotion',
    group: 'preference',
    section: 'accessibility',
    control: 'toggle',
    label: 'Reduce motion',
  },
  {
    key: 'preference.syncMotionWithOS',
    group: 'preference',
    section: 'accessibility',
    control: 'toggle',
    label: "Sync with computer's motion settings",
  },

  // 🧩 Interaction
  {
    key: 'preference.openPostsInNewTab',
    group: 'preference',
    section: 'interaction',
    control: 'toggle',
    label: 'Open posts in new tab',
  },
  {
    key: 'preference.useCommunityThemes',
    group: 'preference',
    section: 'interaction',
    control: 'toggle',
    label: 'Use community themes',
  },
  {
    key: 'preference.defaultMarkdownEditor',
    group: 'preference',
    section: 'interaction',
    control: 'toggle',
    label: 'Default to markdown editor',
  },

  {
    key: 'profile.markAsMature',
    label: 'Mark As Mature',
    group: 'profile',
    section: 'profile',
    control: 'toggle',
  },
  {
    key: 'profile.websiteLink',
    label: 'Website link',
    group: 'profile',
    section: 'profile',
    control: 'string',
  },
  {
    key: 'profile.githubLink',
    label: 'Github link',
    group: 'profile',
    section: 'profile',
    control: 'string',
  },

  //
  {
    key: 'account.gender',
    control: 'select',
    group: 'profile',
    section: 'profile',
    label: 'Gender',
  },
  {
    key: 'account.twoFactor',
    control: 'select',
    group: 'profile',
    section: 'profile',
    label: 'Two authentication factor',
  },

  // 📩 Message
  {
    key: 'notification.message.adminNotifications',
    group: 'notification',
    section: 'message',
    control: 'toggle',
    label: 'Admin notifications',
    description: 'Receive important notifications from administrators',
  },
  {
    key: 'notification.message.chatRequests',
    group: 'notification',
    section: 'message',
    control: 'toggle',
    label: 'Chat requests',
    description: 'Get notified when someone sends you a chat request',
  },
  {
    key: 'notification.message.chatMessages',
    group: 'notification',
    section: 'message',
    control: 'toggle',
    label: 'Chat messages',
    description: 'Get notified when you receive a new chat message',
  },

  // 🔔 Activity
  {
    key: 'notification.activity.newUserWelcome',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'New user welcome',
    description: 'Welcome notifications for new users',
  },
  {
    key: 'notification.activity.commentsOnPosts',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'Comments on your posts',
  },
  {
    key: 'notification.activity.repliesToComments',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'Replies to your comments',
  },
  {
    key: 'notification.activity.upvotesOnPosts',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'Upvotes on your posts',
  },
  {
    key: 'notification.activity.upvotesOnComments',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'Upvotes on your comments',
  },
  {
    key: 'notification.activity.mentions',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'Mentions',
    description: 'Get notified when someone mentions you',
  },
  {
    key: 'notification.activity.newFollowers',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'New followers',
  },
  {
    key: 'notification.activity.awardsReceived',
    group: 'notification',
    section: 'activity',
    control: 'toggle',
    label: 'Awards received',
  },

  // 📰 Newsletters / Updates
  {
    key: 'notification.newsletters.dailyDigest',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Daily digest',
    description: 'A daily summary of activity and highlights',
  },
  {
    key: 'notification.newsletters.weeklyRecap',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Weekly recap',
    description: 'A weekly summary of your activity',
  },
  {
    key: 'notification.newsletters.trendingPosts',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Trending posts',
  },
  {
    key: 'notification.newsletters.featuredContent',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Featured content',
  },
  {
    key: 'notification.newsletters.breakingNews',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Breaking news',
  },
  {
    key: 'notification.newsletters.announcements',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Announcements',
  },
  {
    key: 'notification.newsletters.cakeDay',
    group: 'notification',
    section: 'newsletters',
    control: 'toggle',
    label: 'Cake day',
    description: 'Celebrate your account anniversary',
  },

  // ⚙️ Advanced
  {
    key: 'notification.advanced.unsubscribeAll',
    group: 'notification',
    section: 'advanced',
    control: 'toggle',
    label: 'Unsubscribe from all notifications',
    description:
      'Turn off all notifications except critical account and security alerts',
  },
];
export async function seedSettings(dataSource: DataSource) {
  const settingRepo = dataSource.getRepository(SettingDefinitionEntity);
  await settingRepo.upsert(DEFAULT_SETTING_DEFINITION, ['key']);
}
