import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CommentsService } from '../comments.service';
import { GetCommentPostDto } from '../dto/get-comment-post.dto';
import { AuthOptionalGuard } from '@server/guards/auth-optional.guard';
import { AuthUser } from '@server/decorators/auth-user.decorator';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Controller('comments')
@UseGuards(AuthOptionalGuard)
export class CommentsPublicController {
  constructor(private readonly commentsService: CommentsService) {}
  @Get('')
  async getCommentsByPost(
    @Query() getCommentDto: GetCommentPostDto,
    @AuthUser() user: UserEntity | null,
  ) {
    return await this.commentsService.getCommentsByPostId(
      getCommentDto,
      user?.id,
    );
  }
}
