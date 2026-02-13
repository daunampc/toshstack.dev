import { AuthUser } from '@server/decorators/auth-user.decorator';
import { Auth } from '@server/decorators/http.decorator';
import { UserEntity } from '@server/modules/users/entities/user.entity';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import type { Request, Response } from 'express';
import { VerifyPasswordDto } from '../dto/verify-password.dto';
import { UpdateEmailDto } from '../dto/update-email.dto';
import { UpdateEmailResponseDto } from '../responses/update-email-response.dto';
import { UsersService } from '@server/modules/users/users.service';
import { MeResponseDto } from '../responses/me-response.dto';

@Controller('auth')
@Auth('member')
export class AuthUserController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  @Get('me')
  @HttpCode(HttpStatus.OK)
  async userGetMe(@AuthUser() userData: UserEntity) {
    const { user, user_follow } = await this.usersService.getMeUser({
      id: userData.id,
    });
    return new MeResponseDto(user, user_follow);
  }
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logoutUser(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    this.authService.clearCookie(req, res, '__Host_sess');
    return {
      ok: true,
    };
  }
  @Post('verify')
  @HttpCode(HttpStatus.OK)
  verifyAuth() {
    return {
      ok: true,
    };
  }

  @Post('verify-password-advanced')
  @HttpCode(HttpStatus.OK)
  async verifyPassword(
    @Body() dto: VerifyPasswordDto,
    @AuthUser() user: UserEntity,
  ) {
    return await this.authService.verifyPassword(
      dto.password,
      user.password,
      true,
      user,
    );
  }

  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  async verifyOtp() {}

  @Patch('update-email')
  async updateEmail(@Body() dto: UpdateEmailDto, @AuthUser() user: UserEntity) {
    const isUpdate = await this.authService.updateEmail({ dto, user });
    return new UpdateEmailResponseDto(`'Update success' ${isUpdate.ok}`);
  }
}
