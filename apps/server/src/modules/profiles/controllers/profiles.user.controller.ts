import { Auth } from '@/decorators/http.decorator';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { UpdateProfileResponseDto } from '../responses/update-profile-response.dto';
import { AuthUser } from '@/decorators/auth-user.decorator';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { ProfilesService } from '../profiles.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { SecureFilePipe } from '@/modules/upload/pipes/secure-file.pipe';
import { FileValidationPipe } from '@/modules/upload/pipes/file-validation.pipe';
@Controller('profiles')
@Auth('member')
export class ProfilesUserController {
  constructor(private readonly profilesService: ProfilesService) {}
  @Patch()
  async updateProfile(
    @Body() dto: UpdateProfileDto,
    @AuthUser() user: UserEntity,
  ) {
    await this.profilesService.updateProfile({ dto, user_id: user.id });
    return new UpdateProfileResponseDto('Update profile success');
  }

  @Post('avatar')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(
    @UploadedFile(
      SecureFilePipe,
      new FileValidationPipe({
        maxSize: 5 * 1024 * 1024, // 5mb,
        miniType: ['image/png', 'image/jpg', 'image/jpeg'],
        required: true,
      }),
    )
    file: Express.Multer.File,
    @AuthUser() user: UserEntity,
  ) {
    const result = await this.profilesService.uploadAvatar(file, user.id);
    return {
      path: result,
    };
  }

  @Post('banner')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseInterceptors(FileInterceptor('file'))
  async uploadBanner(
    @UploadedFile(
      SecureFilePipe,
      new FileValidationPipe({
        maxSize: 10 * 1024 * 1024, // 10mb,
        miniType: ['image/jpg', 'image/jpeg', 'image/png'],
        required: true,
      }),
    )
    file: Express.Multer.File,
    @AuthUser() user: UserEntity,
  ) {
    const result = await this.profilesService.uploadBanner(file, user.id);
    return {
      path: result,
    };
  }
}
