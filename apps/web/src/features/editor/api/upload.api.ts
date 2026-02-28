import axiosClient from '@/shared/api/http';

export interface UploadImageResponse {
  url: string;
  filename: string;
}

export interface UploadImageError {
  message: string;
  code?: string;
}

/**
 * Upload image to server
 * @param file - File to upload
 * @returns Promise with image URL
 */
export async function uploadImage(file: File): Promise<UploadImageResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axiosClient.post<UploadImageResponse>('/upload/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}
