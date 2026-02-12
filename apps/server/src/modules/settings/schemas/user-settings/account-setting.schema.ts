export const ACCOUNT_SETTING_SCHEMA = {
  'account.gender': {
    type: 'enum',
    default: 'woman',
    values: ['woman', 'women'],
  },
  'account.twoFactor': {
    type: 'enum',
    default: 'otp-email',
    values: ['otp-email', 'code-auth'],
  },
} as const;
