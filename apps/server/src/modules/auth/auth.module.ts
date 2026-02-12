import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ApiConfigService } from '@/shareds/services/api-config.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PublicStrategy } from './strategies/public.strategy';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ApiConfigService],
      useFactory: (configService: ApiConfigService) => ({
        privateKey: configService.authConfig.private_key,
        publicKey: configService.authConfig.public_key,
        signOptions: {
          algorithm: 'HS256',
          expiresIn: 30 * 1000 * 1000,
        },
        verifyOptions: {
          algorithms: ['RS256'],
        },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy, PublicStrategy],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
