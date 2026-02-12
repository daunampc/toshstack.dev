import fs from 'fs';
import { randomUUID } from 'crypto';

import { StorageProvider } from '@/interfaces/storage.interface';
import { fileTypeFromBuffer } from 'file-type';

export class LocalStorageProvider implements StorageProvider {
  async upload(
    file: Express.Multer.File,
    path: string,
  ): Promise<string | null> {
    const realType = await fileTypeFromBuffer(file.buffer);
    if (!realType) return null;
    const id = randomUUID();
    const fileName = `${Date.now()}-${id}.${realType.ext}`;
    const fullPath = `uploads/${path}/${fileName}`;
    await fs.promises.mkdir(`uploads/${path}`, { recursive: true });
    await fs.promises.writeFile(fullPath, file.buffer);
    return `/${fullPath}`;
  }
}
