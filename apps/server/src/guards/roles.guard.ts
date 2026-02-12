import { Roles } from '@/decorators/roles.decorators';
import { RolesService } from '@/modules/roles/roles.service';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly rolesService: RolesService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>(Roles, context.getHandler());

    if (!roles || roles.length === 0) return true;
    const request = context.switchToHttp().getRequest<{ user: UserEntity }>();

    const user = request.user;

    if (!user) return false;
    const is_admin = await this.rolesService.userHasAnyRole(user.id, ['admin']);
    if (is_admin) return true;
    return await this.rolesService.userHasAnyRole(user.id, roles);
  }
}
