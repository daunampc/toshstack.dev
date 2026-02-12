import { DELAY_KEY } from '@/decorators/delay.decorators';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class DelayInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const delayMs =
      this.reflector.get<number>(DELAY_KEY, context.getHandler()) ??
      this.reflector.get<number>(DELAY_KEY, context.getClass());

    if (!delayMs) {
      return next.handle();
    }

    return from(new Promise((resolve) => setTimeout(resolve, delayMs))).pipe(
      mergeMap(() => next.handle()),
    );
  }
}
