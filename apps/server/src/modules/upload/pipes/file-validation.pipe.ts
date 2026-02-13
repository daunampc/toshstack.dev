import { Injectable, PipeTransform } from '@nestjs/common';
import type { FileValidationOptions } from '../types/file.types';
import { BadRequestAppException } from '@server/exceptions/http.exception';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  constructor(private readonly options: FileValidationOptions) {}
  transform(file: Express.Multer.File) {
    if (!file) {
      if (this.options.required === false) return null;
      throw new BadRequestAppException('FILE_IS_REQUIRED', 'File is required');
    }
    if (
      this.options.miniType &&
      !this.options.miniType.includes(file.mimetype)
    ) {
      throw new BadRequestAppException(
        'INVALID_FILE_TYPE',
        'Invalid file type',
      );
    }
    if (this.options.maxSize && file.size > this.options.maxSize) {
      throw new BadRequestAppException('FILE_TOO_LARGE', 'File too large');
    }
    return file;
  }
}
