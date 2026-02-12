import { Injectable, Logger } from '@nestjs/common';

import type { IAppLogger } from '@/interfaces/app-logger.interface';

@Injectable()
export class AppLoggerService implements IAppLogger {
  private readonly logger = new Logger(AppLoggerService.name);

  log(message: string, context?: string): void {
    this.logger.log(message, context);
  }

  warn(message: string, context?: string): void {
    this.logger.warn(message, context);
  }

  error(message: string, trace?: string, context?: string): void {
    this.logger.error(message, trace, context);
  }

  debug(message: string, context?: string): void {
    this.logger.debug(message, context);
  }
}
