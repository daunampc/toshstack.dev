import { MailerOptions } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisOptions } from 'ioredis';
import path from 'path';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}
  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }
  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }
  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }
  get serverConfig() {
    return {
      app_url: this.getString('APP_URL'),
    };
  }

  get authConfig() {
    return {
      cookie_name: this.getString('COOKIE_NAME'),
      private_key: this.getString('JWT_PRIVATE_KEY'),
      public_key: this.getString('JWT_PUBLIC_KEY'),
      jwt_expiration_time: this.getNumber('JWT_EXPIRATION_TIME') * 1000 * 1000,
    };
  }

  get redisConfig(): RedisOptions {
    return {
      host: this.getString('REDIS_HOST'),
      port: this.getNumber('REDIS_PORT'),
      username: this.getString('REDIS_USERNAME'),
      password: this.getString('REDIS_PASSWORD'),
      db: this.getNumber('REDIS_DB') ?? 0,
      enableReadyCheck: true,
      keyPrefix: 'app',
    };
  }

  get appConfig() {
    return {
      port: this.getString('PORT'),
    };
  }
  get mailerConfig(): MailerOptions {
    return {
      transport: {
        host: this.getString('MAIL_HOST'),
        port: this.getNumber('MAIL_PORT'),
        secure: true,
        auth: {
          user: this.getString('MAIL_USER'),
          pass: this.getString('MAIL_PASS'),
        },
      },
      defaults: {
        from: `"Toshstack" <${this.getString('MAIL_FROM')}>`,
      },
    };
  }
  get postgresConfig(): TypeOrmModuleOptions {
    const entities = [
      path.join(__dirname, `../../modules/**/*.entity{.ts,.js}`),
      path.join(__dirname, `../../modules/**/*.view-entity{.ts,.js}`),
    ];
    const migrations = [
      path.join(__dirname, `../../database/migrations/*{.ts,.js}`),
    ];
    return {
      entities,
      migrations,
      //     dropSchema: this.isDevelopment || this.isTest,
      dropSchema: false,
      type: 'postgres',
      host: this.get('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.get('DB_USER'),
      password: this.get('DB_PASS'),
      database: this.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
      migrationsRun: true,
    };
  }
  private getString(key: string, defaultValue?: string): string {
    const value = this.configService.get<string>(key);
    if (value === undefined) {
      if (defaultValue !== undefined) return defaultValue;
      throw new Error(`${key} environment variable doesn't exist`);
    }
    return value.toString().replaceAll(String.raw`\n`, '\n');
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key);
    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(
        `Environment variable ${key} must be a boolean. Received: ${value}`,
      );
    }
  }

  private getNumber(key: string): number {
    const value = this.get(key);
    const num = Number(value);
    if (Number.isNaN(num)) {
      throw new TypeError(
        `Environment variable ${key} must be a number. Received: ${value}`,
      );
    }
    return num;
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key);

    if (value == null) {
      throw new Error(`Environment variable ${key} is not set`);
    }

    return value;
  }
}
