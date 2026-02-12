export const PREFERENCE_SETTING_SCHEMA = {
  // 🌍 Language & Region
  'preference.language': {
    type: 'enum',
    default: 'english',
    values: ['english', 'vietnamese'],
  },

  'preference.contentLanguage': {
    type: 'enum',
    default: 'english',
    values: ['english', 'vietnamese'],
  },

  // 🔞 Content / Mature
  'preference.showMatureContent': {
    type: 'boolean',
    default: false,
  },

  'preference.blurMatureContent': {
    type: 'boolean',
    default: true,
    dependsOn: 'preference.showMatureContent',
  },

  'preference.showSensitiveWarning': {
    type: 'boolean',
    default: true,
    dependsOn: 'preference.showMatureContent',
  },

  // 📰 Feed & Recommendation
  'preference.showRecommendations': {
    type: 'boolean',
    default: true,
  },

  'preference.defaultFeedSort': {
    type: 'enum',
    default: 'hot',
    values: ['hot', 'new', 'top'],
  },

  'preference.autoplayMedia': {
    type: 'boolean',
    default: false,
  },

  // ♿ Accessibility
  'preference.reduceMotion': {
    type: 'boolean',
    default: false,
  },

  'preference.syncMotionWithOS': {
    type: 'boolean',
    default: true,
  },

  // 🧭 Interaction / UX
  'preference.openPostsInNewTab': {
    type: 'boolean',
    default: false,
  },

  'preference.useCommunityThemes': {
    type: 'boolean',
    default: true,
  },

  'preference.defaultMarkdownEditor': {
    type: 'boolean',
    default: true,
  },

  // ⌨️ Keyboard / Advanced
  'preference.keyboardShortcuts': {
    type: 'object',
    default: {
      enabled: true,
    },
    values: {
      enabled: 'boolean',
    },
  },
} as const;
