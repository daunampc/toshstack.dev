import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class CacheService {
  constructor(private readonly redis: RedisService) {}

  async remember<T>(
    key: string,
    ttl: number,
    resolver: () => Promise<T>,
  ): Promise<T> {
    const cached = await this.redis.get<T>(key);
    if (cached !== null) return cached;

    const value = await resolver();
    await this.redis.set(key, value, ttl);
    return value;
  }
  async forget(key: string) {
    await this.redis.del(key);
  }
}
