import { HttpStatus } from '@nestjs/common';
import { AppException } from './app.exception';
import { ErrorCode, ErrorCodeType } from './error-codes';

export class BadRequestAppException extends AppException {
  constructor(code: ErrorCodeType, message: string, details?: unknown) {
    super(HttpStatus.BAD_REQUEST, { code, message, details });
  }
}

export class UnauthorizedAppException extends AppException {
  constructor(code: ErrorCodeType, message: string, details?: unknown) {
    super(HttpStatus.UNAUTHORIZED, { code, message, details });
  }
}

export class ForbiddenAppException extends AppException {
  constructor(code: ErrorCodeType, message: string, details?: unknown) {
    super(HttpStatus.FORBIDDEN, { code, message, details });
  }
}

export class NotFoundAppException extends AppException {
  constructor(code: ErrorCodeType, message: string, details?: unknown) {
    super(HttpStatus.NOT_FOUND, { code, message, details });
  }
}

export class ConflictAppException extends AppException {
  constructor(code: ErrorCodeType, message: string, details?: unknown) {
    super(HttpStatus.CONFLICT, { code, message, details });
  }
}

export class InternalAppException extends AppException {
  constructor(message = 'Internal server error', details?: unknown) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, {
      code: ErrorCode.UNKNOWN,
      message,
      details,
    });
  }
}
