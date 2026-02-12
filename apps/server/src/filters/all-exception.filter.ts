import { normalizeValidationErrors } from '@/common/utils';
import { AppException } from '@/exceptions/app.exception';
import { ErrorCode, ErrorCodeType } from '@/exceptions/error-codes';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { ValidationError } from 'class-validator';
import { Request, Response } from 'express';
interface ApiErrorResponse {
  success: false;
  code: ErrorCodeType;
  message: string;
  details?: unknown;
  meta: {
    timestamp: string;
    path: string;
    requestId?: string | undefined;
  };
}
interface ApiError {
  code: ErrorCodeType;
  message: string;
  details?: unknown;
}
interface NestHttpErrorResponse {
  statusCode: number;
  message: string | string[];
  error?: string;
}

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(public reflector: Reflector) {}
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = host.switchToHttp().getResponse<Response>();
    const req = ctx.getRequest<Request & { requestId: string }>();
    const timestamp = new Date().toISOString();
    const path = req.originalUrl ?? req.url;
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let error: ApiError = {
      code: ErrorCode.UNKNOWN,
      message: 'Internal server error',
    };
    if (exception instanceof AppException) {
      status = exception.getStatus();

      const payload = exception.getResponse() as {
        code: ErrorCodeType;
        message: string;
        details?: unknown;
      };

      error = {
        code: payload.code,
        message: payload.message,
        details: payload.details,
      };
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();

      const response = exception.getResponse() as NestHttpErrorResponse;

      if (Array.isArray(response.message)) {
        // ValidationPipe error
        const errors = normalizeValidationErrors(
          response.message as unknown as ValidationError[],
        );
        error = {
          code: ErrorCode.VALIDATION,
          message: 'Validation failed',
          details: errors,
        };
      } else {
        error = {
          code: ErrorCode.HTTP_ERROR,
          message: response.message ?? exception.message,
          details: response,
        };
      }
    } else if (exception instanceof Error) {
      error = {
        code: ErrorCode.UNKNOWN,
        message: exception.message,
        details: {
          name: exception.name,
        },
      };
    }

    const body: ApiErrorResponse = {
      success: false,
      ...error,
      meta: {
        timestamp,
        path,
        requestId: req.requestId,
      },
    };

    res.status(status).json(body);
  }
}
