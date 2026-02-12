import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentReactionsService } from '@/modules/comment-reactions/comment-reactions.service';
import { AuthUser } from '@/decorators/auth-user.decorator';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { Auth } from '@/decorators/http.decorator';
import { ToggleReactionDto } from '../dto/toggle-reaction.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentsService } from '../comments.service';

@Controller('comments')
@Auth('member')
export class CommentsUserController {
  constructor(
    private readonly commentReactionService: CommentReactionsService,
    private readonly commentsService: CommentsService,
  ) {}
  @Patch(':comment_id/reactions')
  @HttpCode(HttpStatus.ACCEPTED)
  async toggleReaction(
    @Body() dto: ToggleReactionDto,
    @AuthUser() user: UserEntity,
  ) {
    const result = await this.commentReactionService.toggleCommentReaction({
      ...dto,
      user_id: user.id,
    });
    return {
      ok: result,
      message: 'ok',
    };
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createComment(
    @Body() dto: CreateCommentDto,
    @AuthUser() user: UserEntity,
  ) {
    return await this.commentsService.createComment(dto, user.id);
  }
}
