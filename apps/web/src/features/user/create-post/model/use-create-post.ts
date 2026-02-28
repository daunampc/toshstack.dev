import { createMutation } from '@/shared/lib/tanstack-query/create-mutation';
import { createPostAction } from './create-post.api';
import { CreatePostFormType } from './types';

export const useCreatePost = createMutation<unknown, CreatePostFormType>(createPostAction);
