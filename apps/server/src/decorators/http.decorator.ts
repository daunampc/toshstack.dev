import { AuthGuard } from '@/guards/auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { applyDecorators, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from './roles.decorators';
import { AuthUserInterceptor } from '@/interceptors/auth-user-interceptor.service';

export function Auth(...roles: string[]): MethodDecorator & ClassDecorator {
  return applyDecorators(
    Roles(roles),
    UseGuards(AuthGuard(), RolesGuard),
    UseInterceptors(AuthUserInterceptor),
  );
}
