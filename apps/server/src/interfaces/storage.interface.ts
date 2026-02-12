export interface StorageProvider {
  upload(file: Express.Multer.File, path: string): Promise<string | null>;
}
