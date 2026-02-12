import { Inject, Injectable } from '@nestjs/common';
import { STORAGE_PROVIDER } from './constants/upload.constant';
import { LocalStorageProvider } from '@/providers/local-storage.provider';

@Injectable()
export class UploadService {
  constructor(
    @Inject(STORAGE_PROVIDER)
    private readonly storageProvider: LocalStorageProvider,
  ) {}

  async uploadImage(file: Express.Multer.File) {
    return await this.storageProvider.upload(file, 's');
  }
}
