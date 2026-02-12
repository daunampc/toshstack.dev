import { HttpException } from '@nestjs/common';
import { ErrorCodeType } from './error-codes';

export interface AppExceptionPayload {
  code: ErrorCodeType;
  message: string;
  details?: unknown;
}

export class AppException extends HttpException {
  readonly code: ErrorCodeType;
  readonly details?: unknown;

  constructor(status: number, payload: AppExceptionPayload) {
    super(payload, status);
    this.code = payload.code;
    this.details = payload.details;
  }
}
