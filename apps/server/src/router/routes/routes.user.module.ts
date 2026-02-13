import { AuthModule } from '@server/modules/auth/auth.module';
import { AuthUserController } from '@server/modules/auth/controllers/auth.user.controller';
import { CommentReactionsModule } from '@server/modules/comment-reactions/comment-reactions.module';
import { CommentReactionsUserController } from '@server/modules/comment-reactions/controllers/comment-reactions.user.controller';
import { CommentsModule } from '@server/modules/comments/comments.module';
import { CommentsUserController } from '@server/modules/comments/controllers/comments.user.controller';
import { PostReactionsModule } from '@server/modules/post-reactions/post-reactions.module';
import { PostsUserController } from '@server/modules/posts/controllers/posts.user.controller';
import { PostsModule } from '@server/modules/posts/posts.module';
import { ProfilesUserController } from '@server/modules/profiles/controllers/profiles.user.controller';
import { ProfilesModule } from '@server/modules/profiles/profiles.module';
import { RolesModule } from '@server/modules/roles/roles.module';
import { SettingsUserController } from '@server/modules/settings/controllers/settings.user.controller';
import { SettingsModule } from '@server/modules/settings/settings.module';
import { UploadUserController } from '@server/modules/upload/controllers/upload.user.controller';
import { UploadModule } from '@server/modules/upload/upload.module';
import { UsersUserController } from '@server/modules/users/controllers/users.user.controller';
import { UsersModule } from '@server/modules/users/users.module';
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
