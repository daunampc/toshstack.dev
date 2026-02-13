import { AuthGuard } from '@server/guards/auth.guard';
import { RolesGuard } from '@server/guards/roles.guard';
import { applyDecorators, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from './roles.decorators';
import { AuthUserInterceptor } from '@server/interceptors/auth-user-interceptor.service';

export function Auth(...roles: string[]): MethodDecorator & ClassDecorator {
  return applyDecorators(
    Roles(roles),
    UseGuards(AuthGuard(), RolesGuard),
    UseInterceptors(AuthUserInterceptor),
  );
}
