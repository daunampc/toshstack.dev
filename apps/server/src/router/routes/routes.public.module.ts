import { AuthModule } from '@/modules/auth/auth.module';
import { AuthPublicController } from '@/modules/auth/controllers/auth.public.controller';
import { CommentsModule } from '@/modules/comments/comments.module';
import { CommentsPublicController } from '@/modules/comments/controllers/comments.public.controller';
import { CountriesPublicController } from '@/modules/countries/controllers/countries.public.controller';
import { CountriesModule } from '@/modules/countries/countries.module';
import { PostsPublicController } from '@/modules/posts/controllers/posts.public.controller';
import { PostsModule } from '@/modules/posts/posts.module';
import { ProfilesPublicController } from '@/modules/profiles/controllers/profiles.public.controller';
import { SiteSettingPublicController } from '@/modules/site-settings/controllers/site-settings.public.controller';
import { SiteSettingsModule } from '@/modules/site-settings/site-settings.module';
import { UploadPublicController } from '@/modules/upload/controllers/upload.public.controller';
import { UsersPublicController } from '@/modules/users/controllers/users.public.controller';
import { UsersModule } from '@/modules/users/users.module';
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
