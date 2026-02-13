import { ApiConfigService } from '@server/shareds/services/api-config.service';
import Redis from 'ioredis';

export function createRedisClient(config: ApiConfigService): Redis {
  return new Redis({
    ...config.redisConfig,
    lazyConnect: true,
    maxRetriesPerRequest: null,
  });
}
