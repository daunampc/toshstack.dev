import { UserEntity } from '@/modules/users/entities/user.entity';
import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class AuthOptionalGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      await super.canActivate(context);
    } catch {
      return false;
    }
    return true;
  }
  handleRequest<TUser = UserEntity>(
    _err: unknown,
    user: TUser | false | null,
  ): TUser | null {
    return user || null;
  }
}
