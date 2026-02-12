import { createMutation } from '@/shared/lib/tanstack-query/create-mutation';
import { toggleCommentReaction } from './comment.api';
import { CommentReactionPayload } from './types';

export const useToggleCommentReaction = createMutation<unknown, CommentReactionPayload>(
  toggleCommentReaction
);
