import { EnumField } from '@server/decorators/field.decorators';
import { PostReactionStatus } from '@server/modules/post-reactions/enums/post-reaction-status.enum';

export class CreatePostReactionDto {
  @EnumField(() => PostReactionStatus)
  reaction!: PostReactionStatus;
}
