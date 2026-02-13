import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { AppLoggerService } from '@server/shareds/services/app-logger.service';
import { CacheService } from './cache.service';

@Global()
@Module({
  imports: [],
  providers: [RedisService, AppLoggerService, CacheService],
  exports: [RedisService, CacheService],
})
export class RedisModule {}
