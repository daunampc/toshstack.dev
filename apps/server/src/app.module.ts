import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import type { Response } from 'express';
import { RouterModule } from './router/router.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shareds/shared.module';
import { ApiConfigService } from './shareds/services/api-config.service';
import { ClsModule } from 'nestjs-cls';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CommunitiesModule } from './modules/communities/communities.module';
import { CommunityMembersModule } from './modules/community-members/community-members.module';
import { PostReactionsModule } from './modules/post-reactions/post-reactions.module';
import { CommentReactionsModule } from './modules/comment-reactions/comment-reactions.module';
import { TaxonomyModule } from './modules/taxonomy/taxonomy.module';
import { MailerModule } from './modules/mailer/mailer.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RolesModule } from './modules/roles/roles.module';
import { FollowsModule } from './modules/follows/follows.module';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { SettingsModule } from './modules/settings/settings.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { SiteSettingsModule } from './modules/site-settings/site-settings.module';
import { OtpModule } from './modules/otp/otp.module';
import { RedisModule } from './modules/redis/redis.module';
import { UploadModule } from './modules/upload/upload.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CountriesModule } from './modules/countries/countries.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProfilesModule,
    RouterModule,
    HealthCheckerModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        index: false,
        redirect: false,
        fallthrough: false,
        maxAge: '7d',
        setHeaders(res: Response) {
          res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        },
      },
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 60,
        },
      ],
    }),
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      inject: [ApiConfigService],
      useFactory: (configService: ApiConfigService) =>
        configService.postgresConfig,
    }),
    PostsModule,
    CommentsModule,
    CommunitiesModule,
    CommunityMembersModule,
    PostReactionsModule,
    CommentReactionsModule,
    TaxonomyModule,
    MailerModule,
    PermissionsModule,
    RolesModule,
    FollowsModule,
    SettingsModule,
    WalletsModule,
    SubscriptionsModule,
    SiteSettingsModule,
    OtpModule.forRoot({
      pepper: process.env.OTP_PEPPER!,
      digits: 6,
      ttlSeconds: 120,
      maxAttempts: 5,
      sendCooldownSeconds: 30,
      sendMaxPerWindow: 5,
      sendWindowSeconds: 600,
      keyPrefix: 'otp',
    }),
    RedisModule,
    UploadModule,
    CountriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
