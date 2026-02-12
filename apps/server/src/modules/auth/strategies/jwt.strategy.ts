import { ApiConfigService } from '@/shareds/services/api-config.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenData } from '../types/token.types';
import { UnauthorizedAppException } from '@/exceptions/http.exception';
import { UsersService } from '@/modules/users/users.service';
import { UserEntity } from '@/modules/users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ApiConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.cookieExtractor(configService.authConfig.cookie_name),
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.authConfig.private_key,
    });
  }

  private static cookieExtractor(cookieName: string) {
    return (req: Request) => {
      const cookies: unknown = req.cookies;
      if (
        typeof cookies === 'object' &&
        cookies !== null &&
        cookieName in cookies
      ) {
        const token = (cookies as Record<string, unknown>)[cookieName];
        return typeof token === 'string' ? token : null;
      }

      return null;
    };
  }
  async validate(payload: AccessTokenData | null): Promise<UserEntity> {
    if (!payload)
      throw new UnauthorizedAppException('UNAUTHORIZED', 'Unauthorized');
    const user = await this.userService.findOne({
      id: payload.user_id,
    });
    if (!user)
      throw new UnauthorizedAppException('UNAUTHORIZED', 'Unauthorized');
    return user;
  }
}
