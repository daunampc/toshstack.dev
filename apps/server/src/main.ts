import { NestFactory, Reflector } from '@nestjs/core';
import './boilerplate.polyfill';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import {
  ClassSerializerInterceptor,
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import helmet from 'helmet';
import { QueryFailedFilter } from './filters/query-failed.filter';
import { ApiConfigService } from './shareds/services/api-config.service';
import { SharedModule } from './shareds/shared.module';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { DelayInterceptor } from './interceptors/delay.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: {
        origin: process.env.CORS_ORIGINS?.split(',') || [
          'http://localhost:3000',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true,
      },
    },
  );
  app.use(helmet());
  app.setGlobalPrefix('/api/v1');
  app.use(morgan('combined'));
  app.use(cookieParser());
  app.enableVersioning();
  const reflector = app.get(Reflector);
  app.useGlobalFilters(
    new AllExceptionFilter(reflector),
    new QueryFailedFilter(reflector),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(reflector),
    new DelayInterceptor(reflector),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      transformOptions: { exposeDefaultValues: true },
      disableErrorMessages: true,
      dismissDefaultMessages: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
  );

  const configService = app.select(SharedModule).get(ApiConfigService);
  if (!configService.isDevelopment) {
    app.enableShutdownHooks();
  }

  const port = configService.appConfig.port;

  await app.listen(port ?? 3000, '0.0.0.0');

  console.info(`server running on ${await app.getUrl()}`);
  return app;
}
export const nestNodeApp = bootstrap();
