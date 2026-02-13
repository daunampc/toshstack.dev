import { Global, Module } from '@nestjs/common';
import { MailerModule as MailerModuleFS } from '@nestjs-modules/mailer';
import { MailerService } from './mailer.service';
import { ApiConfigService } from '@server/shareds/services/api-config.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Global()
@Module({
  imports: [
    MailerModuleFS.forRootAsync({
      inject: [ApiConfigService],
      useFactory: (configService: ApiConfigService) => ({
        ...configService.mailerConfig,
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
