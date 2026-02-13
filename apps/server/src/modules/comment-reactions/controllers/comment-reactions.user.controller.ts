import { Auth } from '@server/decorators/http.decorator';
import { Body, Controller, Patch } from '@nestjs/common';
import { ReactionCommentDto } from '../dto/reaction-comment.dto';
import { CommentReactionsService } from '../comment-reactions.service';
import { AuthUser } from '@server/decorators/auth-user.decorator';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Controller('comment-reactions')
@Auth('member')
export class CommentReactionsUserController {
  constructor(
    private readonly commentReactionService: CommentReactionsService,
  ) {}
  @Patch('')
  async toggleCommentReaction(
    @Body() dto: ReactionCommentDto,
    @AuthUser() user: UserEntity,
  ) {
    await this.commentReactionService.toggleCommentReaction({
      ...dto,
      user_id: user.id,
    });
    return {
      ok: true,
    };
  }
}
