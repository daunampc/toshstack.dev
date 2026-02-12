export const NOTIFICATION_SETTING_SCHEMA = {
  // 📩 Message
  'notification.message.adminNotifications': {
    type: 'boolean',
    default: true,
  },

  'notification.message.chatRequests': {
    type: 'boolean',
    default: true,
  },

  'notification.message.chatMessages': {
    type: 'boolean',
    default: true,
  },

  // 🔔 Activity
  'notification.activity.newUserWelcome': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.commentsOnPosts': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.repliesToComments': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.upvotesOnPosts': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.upvotesOnComments': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.mentions': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.newFollowers': {
    type: 'boolean',
    default: true,
  },

  'notification.activity.awardsReceived': {
    type: 'boolean',
    default: true,
  },

  // 📰 Newsletters / Updates
  'notification.newsletters.dailyDigest': {
    type: 'boolean',
    default: false,
  },

  'notification.newsletters.weeklyRecap': {
    type: 'boolean',
    default: true,
  },

  'notification.newsletters.trendingPosts': {
    type: 'boolean',
    default: true,
  },

  'notification.newsletters.featuredContent': {
    type: 'boolean',
    default: true,
  },

  'notification.newsletters.breakingNews': {
    type: 'boolean',
    default: true,
  },

  'notification.newsletters.announcements': {
    type: 'boolean',
    default: true,
  },

  'notification.newsletters.cakeDay': {
    type: 'boolean',
    default: true,
  },

  // ⚙️ Advanced
  'notification.advanced.unsubscribeAll': {
    type: 'boolean',
    default: false,
  },
};
