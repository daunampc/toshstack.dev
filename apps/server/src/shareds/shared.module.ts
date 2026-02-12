import { Global, Module, type Provider } from '@nestjs/common';
import { ApiConfigService } from './services/api-config.service';
import { CqrsModule } from '@nestjs/cqrs';
import { AppLoggerService } from './services/app-logger.service';
import { APP_LOGGER } from './logger.token';
import { SnowFlakeService } from './services/snowflake.service';

const providers: Provider[] = [
  ApiConfigService,
  SnowFlakeService,
  {
    provide: APP_LOGGER,
    useClass: AppLoggerService,
  },
];
@Global()
@Module({
  providers,
  imports: [CqrsModule],
  exports: [...providers, CqrsModule, APP_LOGGER],
})
export class SharedModule {}
