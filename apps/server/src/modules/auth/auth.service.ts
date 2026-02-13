import { ApiConfigService } from '@server/shareds/services/api-config.service';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dto/user-login.dto';
import { UnauthorizedAppException } from '@server/exceptions/http.exception';
import { validateHash } from '@server/common/utils';
import { AccessTokenData } from './types/token.types';
import { TokenType } from '@server/constants/token-type';
import { AppLoggerService } from '@server/shareds/services/app-logger.service';
import { APP_LOGGER } from '@server/shareds/logger.token';
import { TokenResponseDto } from './responses/token-response.dto';
import { CookieOptions, Request, Response } from 'express';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/entities/user.entity';
import { OtpService } from '../otp/otp.service';
import { VerifyPasswordResult } from './types/verify-password.types';
import { MailerService } from '../mailer/mailer.service';
import {
  UpdateEmailInput,
  UpdateEmailResult,
} from './types/update-email.types';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ApiConfigService,
    private usersService: UsersService,
    @Inject(APP_LOGGER)
    private appLoggerService: AppLoggerService,
    private readonly otpService: OtpService,
    private readonly mailerService: MailerService,
  ) {}

  /**
   * Generates a JWT access token for the given user data.
   *
   * @param data - Payload used to generate the access token
   * @returns Access token with expiration info
   */
  async createAccessToken(data: AccessTokenData): Promise<TokenResponseDto> {
    return new TokenResponseDto({
      expiresIn: this.configService.authConfig.jwt_expiration_time,
      token: await this.jwtService.signAsync({
        user_id: data.user_id,
        type: TokenType.ACCESS_TOKEN,
        role: data.role,
      }),
    });
  }
  /**
   * Validates user credentials during login.
   *
   * @param userLoginDto - Login credentials (email and password)
   * @returns The authenticated UserEntity
   * @throws UnauthorizedAppException if credentials are invalid
   */
  async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
    const user = await this.usersService.findOne({
      email: userLoginDto.email,
    });
    if (!user)
      throw new UnauthorizedAppException(
        'AUTH_INVALID_CREDENTIALS',
        'Email or Password incorrect',
      );
    const isPasswordValid = await validateHash(
      userLoginDto.password,
      user?.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedAppException(
        'AUTH_INVALID_CREDENTIALS',
        'Email or Password incorrect',
      );
    this.appLoggerService.log('LOGIN_SUCCESS', 'AUTH_SERVICE_LOGIN');
    return user;
  }

  async verifyPassword(
    password: string,
    hash_password: string,
    otp?: boolean,
    user?: UserEntity,
  ): Promise<VerifyPasswordResult> {
    const isPasswordValid = await validateHash(password, hash_password);
    if (!isPasswordValid)
      throw new UnauthorizedAppException(
        'AUTH_INVALID_CREDENTIALS',
        'Password is incorrect',
      );
    if (otp && user) {
      const otp_result = await this.otpService.createOtp({
        subject: user.email,
        purpose: 'verify_email',
      });
      await this.mailerService.verifyOtp({ otp: otp_result, user });
      return {
        is_verify: isPasswordValid,
      };
    }
    return {
      is_verify: isPasswordValid,
    };
  }

  async updateEmail(input: UpdateEmailInput): Promise<UpdateEmailResult> {
    const { user, dto } = input;
    const otpChecked = await this.otpService.verifyOtp({
      code: dto.otp,
      purpose: 'verify_email',
      subject: user.email,
    });
    if (otpChecked.ok) {
      const result = await this.usersService.updateEmail(
        dto.email_new,
        user.id,
      );
      if (result.raw) {
        return { ok: true };
      }
    }
    return { ok: false };
  }

  /**
   * Sets an HTTP-only cookie with default security options.
   *
   * @param res - HTTP response object
   * @param name - Cookie name
   * @param value - Cookie value
   * @param opts - Optional cookie overrides
   */
  setCookie(res: Response, name: string, value: string, opts?: CookieOptions) {
    const sameSite = 'lax';
    const secure = false;
    const domain = 'localhost';

    res.cookie(name, value, {
      httpOnly: true,
      secure,
      sameSite,
      path: '/',
      domain,
      ...opts,
    });
  }

  clearCookie(req: Request, res: Response, name: string) {
    const cookies = req.cookies as { [key: string]: string };
    const access_token = cookies[name];
    if (!access_token)
      throw new UnauthorizedAppException('UNAUTHORIZED', 'Unauthorized');
    res.clearCookie(name, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });
  }
}
