import type { ExecutionContext } from '@nestjs/common';

import { createParamDecorator } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

export function AuthUser() {
  return createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<Request>();
    const reflector = new Reflector();
    const isPublic = reflector.getAllAndMerge('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!isPublic) return;
    return request.user;
  })();
}
