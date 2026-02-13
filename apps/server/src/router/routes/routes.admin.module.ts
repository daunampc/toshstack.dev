import { AuthModule } from '@server/modules/auth/auth.module';
import { AuthAdminController } from '@server/modules/auth/controllers/auth.admin.controller';
import { CommentsAdminController } from '@server/modules/comments/controllers/comments.admin.controller';
import { ProfilesAdminController } from '@server/modules/profiles/controllers/profiles.admin.controller';
import { UploadAdminController } from '@server/modules/upload/controllers/upload.admin.controller';
import { UsersAdminController } from '@server/modules/users/controllers/users.admin.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule],
  controllers: [
    AuthAdminController,
    UsersAdminController,

    CommentsAdminController,
    ProfilesAdminController,
    UploadAdminController,
  ],
})
export class RoutesAdminModule {}
