import { Inject, Injectable } from '@nestjs/common';
import { CacheService, RedisService } from '../redis';
import { OTP_OPTIONS } from '@server/constants/otp.constants';
import type {
  CreateOtpInput,
  CreateOtpResult,
  OtpModuleOptions,
  OtpPurpose,
  StoredOtpPayload,
  VerifyOtpInput,
  VerifyOtpResult,
} from './types/otp.types';
import { ConflictAppException } from '@server/exceptions/http.exception';
import {
  generateOtpCode,
  hmacSha256Hex,
  makeSalt,
  safeEqualHex,
  stableBindString,
} from '@server/common/otp.util';

@Injectable()
export class OtpService {
  constructor(
    private readonly cacheService: CacheService,
    @Inject(OTP_OPTIONS) private readonly otp: OtpModuleOptions,
    private readonly redis: RedisService,
  ) {}

  private cfg() {
    return {
      pepper: this.otp.pepper,
      keyPrefix: this.otp.keyPrefix ?? 'otp',
      digits: this.otp.digits ?? 6,
      sendMaxPerWindow: this.otp.sendMaxPerWindow ?? 5,
      sendCooldownSeconds: this.otp.sendMaxPerWindow ?? 30,
      maxAttempts: this.otp.maxAttempts ?? 5,
      sendWindowSeconds: this.otp.sendWindowSeconds ?? 600,
      ttlSeconds: this.otp.ttlSeconds ?? 100,
    };
  }
  private otpKey(purpose: OtpPurpose, subject: string) {
    return `${this.cfg().keyPrefix}:${purpose}:${subject}`;
  }
  private cooldownKey(purpose: OtpPurpose, subject: string) {
    const { keyPrefix } = this.cfg();
    return `${keyPrefix}:sendcount:${purpose}:${subject}`;
  }
  private sendCoutKey(purpose: OtpPurpose, subject: string) {
    const { keyPrefix } = this.cfg();
    return `${keyPrefix}:sendcount:${purpose}:${subject}`;
  }

  async createOtp(input: CreateOtpInput): Promise<CreateOtpResult> {
    const cdKey = this.cooldownKey(input.purpose, input.subject);
    const cd = await this.redis.ttl(cdKey);
    if (cd > 0) {
      throw new ConflictAppException(
        'OTP_COOLDOWN_ACTIVE',
        `OTP cooldown active. Retry after ${cd}s`,
      );
    }
    const scKey = this.sendCoutKey(input.purpose, input.subject);
    const sendCount = await this.redis.incr(scKey);
    if (sendCount === 1) {
      await this.redis.expire(cdKey, this.cfg().sendWindowSeconds);
    }
    if (sendCount > this.cfg().maxAttempts) {
      throw new ConflictAppException(
        'OTP_TOO_MANY_REQUEST',
        'Too many OTP requests in time window',
      );
    }

    const code = generateOtpCode(6);
    const salt = makeSalt(16);
    const bindStr = stableBindString(input.bind);
    const bindHash = bindStr
      ? hmacSha256Hex(this.cfg().pepper, `bind|${bindStr}`)
      : undefined;

    const hash = hmacSha256Hex(
      this.cfg().pepper,
      `otp|${input.purpose}|${input.subject}|${code}|${salt}`,
    );
    const payload: StoredOtpPayload = {
      salt,
      hash,
      attempts: 0,
      bindHash,
      created_at: Date.now(),
    };

    // Create OTP Key
    await this.redis.set(
      this.otpKey(input.purpose, input.subject),
      payload,
      this.cfg().ttlSeconds,
    );

    // Set cooldown key
    await this.redis.cooldownKey(cdKey, this.cfg().sendCooldownSeconds);
    return {
      code,
      expiresInSeconds: this.cfg().sendCooldownSeconds,
    };
  }

  async verifyOtp(input: VerifyOtpInput): Promise<VerifyOtpResult> {
    const key = this.otpKey(input.purpose, input.subject);
    const payload = await this.redis.get<StoredOtpPayload>(key);
    if (!payload)
      throw new ConflictAppException('OTP_NOT_WORKING', 'Otp not working');
    if (payload.attempts >= this.cfg().maxAttempts) {
      throw new ConflictAppException(
        'OTP_TOO_MANY_ATTEMPTS',
        'Otp too many attempts',
      );
    }
    // const bindStr = stableBindString(input.bind);
    // if (payload.bindHash) {
    // const reqBindHash = hmacSha256Hex(this.cfg().pepper, `bind|${bindStr}`);
    // if (!safeEqualHex(payload.bindHash, reqBindHash)) {
    //   return { ok: false, reason: 'BIND_MISMATCH' };
    // }
    // }
    const expectedHash = hmacSha256Hex(
      this.cfg().pepper,
      `otp|${input.purpose}|${input.subject}|${input.code}|${payload.salt}`,
    );
    const match = safeEqualHex(payload.hash, expectedHash);
    if (match) {
      await this.redis.del(key);
      return {
        ok: true,
      };
    }
    payload.attempts += 1;
    const ttl = await this.redis.ttl(key);
    if (ttl > 0) {
      await this.redis.set(key, payload, ttl);
    } else {
      await this.redis.del(key);
      throw new ConflictAppException('OTP_EXPIRED', 'Otp expired');
    }
    throw new ConflictAppException('OTP_NOT_WORKING', 'OTP_NOT_WORKING');
  }
}
