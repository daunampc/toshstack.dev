import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from '../users.service';
import { AuthOptionalGuard } from '@server/guards/auth-optional.guard';

@Controller('users')
@UseGuards(AuthOptionalGuard)
export class UsersPublicController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':handle')
  async getUser(@Param('handle') handle: string) {
    const { user, user_follow } =
      await this.usersService.getPublicProfileByHandle(handle);
    return user.toDto({
      user_follow,
    });
  }
}
