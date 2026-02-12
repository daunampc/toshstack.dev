import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { PostsService } from '../posts.service';
import { GetPostDto, GetPostUserDto } from '../dto/get-post.dto';
import { GetDetailPostDto } from '../dto/detail-post.dto';
import { AuthOptionalGuard } from '@/guards/auth-optional.guard';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { AuthUser } from '@/decorators/auth-user.decorator';
import { UsersService } from '@/modules/users/users.service';

@Controller('posts')
@UseGuards(AuthOptionalGuard)
export class PostsPublicController {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}
  @Get('')
  async getPosts(
    @Query() getPostDto: GetPostDto,
    @AuthUser() user: UserEntity | null,
  ) {
    return await this.postsService.getPosts(getPostDto, user?.id);
  }

  @Get('user')
  async getUserPosts(
    @Query() dto: GetPostUserDto,
    @AuthUser() userView: UserEntity | null,
  ) {
    const userPost = await this.usersService.findOne({
      handle: dto.handle,
    });
    return await this.postsService.getUserPosts(dto, userPost, userView);
  }

  @Get('detail/:slug')
  async getDetaiPost(
    @Param('') param: GetDetailPostDto,
    @AuthUser() authUser: UserEntity | null,
  ) {
    return await this.postsService.findbySlug(param.slug, authUser?.id);
  }
}
