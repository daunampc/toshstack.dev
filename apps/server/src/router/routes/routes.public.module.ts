import { AuthModule } from '@server/modules/auth/auth.module';
import { AuthPublicController } from '@server/modules/auth/controllers/auth.public.controller';
import { CommentsModule } from '@server/modules/comments/comments.module';
import { CommentsPublicController } from '@server/modules/comments/controllers/comments.public.controller';
import { CountriesPublicController } from '@server/modules/countries/controllers/countries.public.controller';
import { CountriesModule } from '@server/modules/countries/countries.module';
import { PostsPublicController } from '@server/modules/posts/controllers/posts.public.controller';
import { PostsModule } from '@server/modules/posts/posts.module';
import { ProfilesPublicController } from '@server/modules/profiles/controllers/profiles.public.controller';
import { SiteSettingPublicController } from '@server/modules/site-settings/controllers/site-settings.public.controller';
import { SiteSettingsModule } from '@server/modules/site-settings/site-settings.module';
import { UploadPublicController } from '@server/modules/upload/controllers/upload.public.controller';
import { UsersPublicController } from '@server/modules/users/controllers/users.public.controller';
import { UsersModule } from '@server/modules/users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SiteSettingsModule,
    CountriesModule,
    PostsModule,
    CommentsModule,
  ],
  controllers: [
    AuthPublicController,
    UsersPublicController,
    PostsPublicController,
    CommentsPublicController,
    SiteSettingPublicController,
    ProfilesPublicController,
    UploadPublicController,
    CountriesPublicController,
  ],
})
export class RoutesPublicModule {}
