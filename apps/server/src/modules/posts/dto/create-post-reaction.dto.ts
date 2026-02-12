import { EnumField } from '@/decorators/field.decorators';
import { PostReactionStatus } from '@/modules/post-reactions/enums/post-reaction-status.enum';

export class CreatePostReactionDto {
  @EnumField(() => PostReactionStatus)
  reaction!: PostReactionStatus;
}
