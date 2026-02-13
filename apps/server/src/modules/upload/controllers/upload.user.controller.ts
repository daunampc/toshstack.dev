import { Auth } from '@server/decorators/http.decorator';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileValidationPipe } from '../pipes/file-validation.pipe';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from '../upload.service';
import { Throttle } from '@nestjs/throttler';
import { SecureFilePipe } from '../pipes/secure-file.pipe';

@Controller('upload')
@Throttle({ default: { limit: 10, ttl: 60 } })
@Auth('member')
export class UploadUserController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  async upload(
    @UploadedFile(
      SecureFilePipe,
      new FileValidationPipe({
        maxSize: 5 * 1024 * 1024, // 5mb,
        required: true,
        miniType: ['image/png', 'image/jpg'],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.uploadService.uploadImage(file);
  }
}
