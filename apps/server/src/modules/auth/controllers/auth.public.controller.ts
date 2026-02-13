import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { UserLoginDto } from '../dto/user-login.dto';
import { AuthService } from '../auth.service';
import { RoleType } from '@server/constants/role-type';
import { UserRegisterDto } from '../dto/user-register.dto';
import { LoginResponseDto } from '../responses/login-response.dto';
import type { Response } from 'express';
import { UsersService } from '@server/modules/users/users.service';
import { MailerService } from '@server/modules/mailer/mailer.service';

@Controller('auth')
export class AuthPublicController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private mailerService: MailerService,
  ) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async userLogin(
    @Body() userLoginDto: UserLoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(userLoginDto);
    // const ip =
    //   (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    //   req.socket.remoteAddress;
    // await this.userService.updateIp(userEntity.id, ip ?? null);
    const token = await this.authService.createAccessToken({
      user_id: user.id,
      role: RoleType.USER,
    });
    this.authService.setCookie(res, '__Host_sess', token.token);
    return new LoginResponseDto(user.toDto(), token);
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  async userRegister(@Body() userRegisterDto: UserRegisterDto) {
    const createdUser = await this.userService.createUser(userRegisterDto);
    if (createdUser) {
      await this.mailerService.welcomeRegister(
        createdUser.profile.display_name,
        createdUser.email,
      );
    }
    return createdUser.toDto();
  }
}
