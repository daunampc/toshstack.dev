export const PROFILE_SETTING_SCHEMA = {
  'profile.markAsMature': {
    type: 'boolean',
    default: false,
  },
  'profile.websiteLink': {
    type: 'string',
    default: null,
  },
  'profile.githubLink': {
    type: 'string',
    default: null,
  },
  'profile.xLink': {
    type: 'string',
    default: null,
  },
} as const;
