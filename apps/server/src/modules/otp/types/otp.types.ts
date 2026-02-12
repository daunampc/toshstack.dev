export type OtpPurpose = 'verify_email' | 'login' | 'reset_password';

export interface OtpModuleOptions {
  pepper: string;
  digits?: number; // default 6
  ttlSeconds?: number; // default 120
  maxAttempts?: number; // default 5

  sendCooldownSeconds?: number; // default 30
  sendMaxPerWindow?: number; // default 5
  sendWindowSeconds?: number; // default 60 * 10

  keyPrefix?: string; // default otp
}
export interface VerifyOtpInput {
  purpose: OtpPurpose;
  subject: string;
  code: string;
  bind?: Record<string, string | number | boolean | null | undefined>;
}

export interface CreateOtpInput {
  purpose: OtpPurpose;
  subject: string;
  bind?: Record<string, string | number | boolean | null | undefined>;
}

export type VerifyOtpResult =
  | { ok: true }
  | {
      ok: false;
      reason:
        | 'NOT_FOUND'
        | 'EXPIRED'
        | 'TOO_MANY_ATTEMPTS'
        | 'MISMATCH'
        | 'BIND_MISMATCH';
    };
export interface CreateOtpResult {
  code: string;
  expiresInSeconds: number;
}

export interface StoredOtpPayload {
  salt: string;
  hash: string;
  attempts: number;
  bindHash?: string | undefined;
  created_at: number;
}
