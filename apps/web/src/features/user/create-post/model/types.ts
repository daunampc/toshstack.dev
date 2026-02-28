import { UseFormReturnType } from '@mantine/form';
import { JSONContent } from '@tiptap/core';

export interface CreatePostFormType {
  title: string;
  images: File[] | null;
  content: JSONContent | null;
  schedule_post: string | null;
}

export interface ModalImageEditProps {
  images: File[];
  onRemove: (file: number) => void;
}

export interface PostEditorProps {
  form: UseFormReturnType<CreatePostFormType>;
}

export interface SchedulePostProps {
  form: UseFormReturnType<CreatePostFormType>;
}
