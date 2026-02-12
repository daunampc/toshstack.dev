import { allowFileImages } from '@/config/allow-file.config';
import { BadRequestAppException } from '@/exceptions/http.exception';
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { fileTypeFromBuffer } from 'file-type';
import sharp from 'sharp';

export class SecureFilePipe implements PipeTransform {
  async transform(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestAppException('FILE_IS_REQUIRED', 'File is required');
    }

    const realType = await fileTypeFromBuffer(file.buffer);
    if (!realType) {
      throw new BadRequestAppException('FILE_UNKNOWN', 'File unknown');
    }

    if (!allowFileImages.includes(realType.mime)) {
      throw new BadRequestAppException(
        'INVALID_FILE_TYPE',
        'Invalid file type',
      );
    }
    if (realType.mime !== file.mimetype) {
      throw new BadRequestAppException(
        'INVALID_FILE_TYPE',
        'File mimetype spoofed',
      );
    }
    try {
      await sharp(file.buffer).rotate().jpeg().png().metadata();
    } catch {
      throw new BadRequestAppException(
        'FILE_UNKNOWN',
        'Fake or corrupted image',
      );
    }
    const cleanBuffer = await sharp(file.buffer)
      .rotate()
      .toFormat(realType.ext === 'png' ? 'png' : 'jpeg', {
        quality: 90,
      })
      .toBuffer();

    file.buffer = cleanBuffer;
    file.size = cleanBuffer.length;
    return file;
  }
}
