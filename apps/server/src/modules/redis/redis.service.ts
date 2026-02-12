import { ApiConfigService } from '@/shareds/services/api-config.service';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
import { createRedisClient } from './redis.client';
import { AppLoggerService } from '@/shareds/services/app-logger.service';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: Redis;

  constructor(
    private readonly configService: ApiConfigService,
    private readonly loggService: AppLoggerService,
  ) {
    this.redis = createRedisClient(configService);
    this.redis.on('error', (err) => {
      this.loggService.error('REDIS_ERROR', err.message);
    });
    this.redis.on('connecting', () => {
      this.loggService.log('Redis connecting', '[REDIS_SERVICE]');
    });
  }
  async onModuleDestroy() {
    await this.redis.quit();
  }

  async onModuleInit() {
    await this.redis.connect();
  }
  private buildKey(key: string) {
    return `${key}`;
  }

  async get<T = any>(key: string): Promise<T | null> {
    const data = await this.redis.get(this.buildKey(key));
    return data ? (JSON.parse(data) as T) : null;
  }

  async set(key: string, value: unknown, ttl?: number) {
    const payload = JSON.stringify(value);
    const redisKey = this.buildKey(key);
    if (ttl) {
      await this.redis.set(redisKey, payload, 'EX', ttl);
    } else {
      await this.redis.set(redisKey, payload);
    }
  }

  async del(key: string) {
    await this.redis.del(this.buildKey(key));
  }

  async exists(key: string) {
    return this.redis.exists(this.buildKey(key));
  }

  async lock(key: string, ttl = 10): Promise<boolean> {
    const result = await this.redis.set(
      this.buildKey(`lock:${key}`),
      '1',
      'EX',
      ttl,
    );
    return result === 'OK';
  }

  async unlock(key: string) {
    await this.del(`lock:${key}`);
  }

  async incr(key: string): Promise<number> {
    return await this.redis.incr(key);
  }
  async expire(key: string, seconds: number): Promise<number> {
    return await this.redis.expire(key, seconds);
  }
  async cooldownKey(key: string, cooldownSeconds: number) {
    return await this.redis.set(key, '1', 'EX', cooldownSeconds);
  }

  async ttl(key: string): Promise<number> {
    return await this.redis.ttl(key);
  }
}
