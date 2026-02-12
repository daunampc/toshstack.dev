import { AuthModule } from '@/modules/auth/auth.module';
import { AuthUserController } from '@/modules/auth/controllers/auth.user.controller';
import { CommentReactionsModule } from '@/modules/comment-reactions/comment-reactions.module';
import { CommentReactionsUserController } from '@/modules/comment-reactions/controllers/comment-reactions.user.controller';
import { CommentsModule } from '@/modules/comments/comments.module';
import { CommentsUserController } from '@/modules/comments/controllers/comments.user.controller';
import { PostReactionsModule } from '@/modules/post-reactions/post-reactions.module';
import { PostsUserController } from '@/modules/posts/controllers/posts.user.controller';
import { PostsModule } from '@/modules/posts/posts.module';
import { ProfilesUserController } from '@/modules/profiles/controllers/profiles.user.controller';
import { ProfilesModule } from '@/modules/profiles/profiles.module';
import { RolesModule } from '@/modules/roles/roles.module';
import { SettingsUserController } from '@/modules/settings/controllers/settings.user.controller';
import { SettingsModule } from '@/modules/settings/settings.module';
import { UploadUserController } from '@/modules/upload/controllers/upload.user.controller';
import { UploadModule } from '@/modules/upload/upload.module';
import { UsersUserController } from '@/modules/users/controllers/users.user.controller';
import { UsersModule } from '@/modules/users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    RolesModule,
    UsersModule,
    SettingsModule,
    ProfilesModule,
    PostsModule,
    UploadModule,
    CommentsModule,
    CommentReactionsModule,
    PostReactionsModule,
  ],
  controllers: [
    AuthUserController,
    UsersUserController,
    PostsUserController,
    CommentsUserController,
    CommentReactionsUserController,
    SettingsUserController,
    ProfilesUserController,
    UploadUserController,
  ],
})
export class RoutesUserModule {}
