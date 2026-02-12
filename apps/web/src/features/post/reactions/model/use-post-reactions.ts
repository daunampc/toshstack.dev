import { createMutation } from '@/shared/lib/tanstack-query/create-mutation';
import { createPostReaction } from './post-reaction.api';
import { CreatePostReactionPayload } from './types';

export const useCreatePostReaction = createMutation<unknown, CreatePostReactionPayload>(
  createPostReaction
);
