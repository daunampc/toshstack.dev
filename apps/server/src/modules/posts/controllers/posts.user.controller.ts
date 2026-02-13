import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { Auth } from '@server/decorators/http.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from '../posts.service';
import { SecureFilePipe } from '@server/modules/upload/pipes/secure-file.pipe';
import { FileValidationPipe } from '@server/modules/upload/pipes/file-validation.pipe';
import { AuthUser } from '@server/decorators/auth-user.decorator';
import { UserEntity } from '@server/modules/users/entities/user.entity';
import { CreatePostReactionDto } from '../dto/create-post-reaction.dto';
import { PostReactionsService } from '@server/modules/post-reactions/post-reactions.service';

@Controller('posts')
@Auth('member')
export class PostsUserController {
  constructor(
    private readonly postsService: PostsService,
    private readonly postReactionService: PostReactionsService,
  ) {}
  @Post('new')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('image'))
  async createPost(
    @UploadedFile(
      SecureFilePipe,
      new FileValidationPipe({
        maxSize: 5 * 1024 * 1024, // 5mb,
        miniType: ['image/png', 'image/jpg', 'image/jpeg'],
        required: false,
      }),
    )
    file: Express.Multer.File | null,
    @Body() dto: CreatePostDto,
    @AuthUser() user: UserEntity,
  ) {
    const result = await this.postsService.createPost(dto, user.id, file);
    return {
      message: 'Create post suceess',
      success: result,
    };
  }

  @Post(':id/reaction')
  @HttpCode(HttpStatus.CREATED)
  async createPostReaction(
    @Body() dto: CreatePostReactionDto,
    @Param('id') post_id: string,
    @AuthUser() user: UserEntity,
  ) {
    return await this.postReactionService.upsertPostReaction(
      dto,
      user.id,
      post_id,
    );
  }
}
