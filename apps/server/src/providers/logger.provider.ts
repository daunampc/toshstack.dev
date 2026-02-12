import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export const logger = WinstonModule.createLogger({
  level: process.env.LOG_LEVEL || 'info',

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),

  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          ({ level, message, timestamp, context, stack }) => {
            return `[${timestamp}] ${level} ${context ?? ''} ${message}${
              stack ? `\n${stack}` : ''
            }`;
          },
        ),
      ),
    }),
  ],
});
