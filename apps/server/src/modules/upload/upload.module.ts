import { Global, Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { LocalStorageProvider } from '@/providers/local-storage.provider';
import { STORAGE_PROVIDER } from './constants/upload.constant';

@Global()
@Module({
  providers: [
    UploadService,
    {
      provide: STORAGE_PROVIDER,
      useClass: LocalStorageProvider,
    },
  ],
  exports: [UploadService],
})
export class UploadModule {}
