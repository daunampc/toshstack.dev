import { AuthModule } from '@/modules/auth/auth.module';
import { AuthAdminController } from '@/modules/auth/controllers/auth.admin.controller';
import { CommentsAdminController } from '@/modules/comments/controllers/comments.admin.controller';
import { ProfilesAdminController } from '@/modules/profiles/controllers/profiles.admin.controller';
import { UploadAdminController } from '@/modules/upload/controllers/upload.admin.controller';
import { UsersAdminController } from '@/modules/users/controllers/users.admin.controller';
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
