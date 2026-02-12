import { argon2Config } from '@/config/argon2.config';
import { randomBytes } from 'crypto';

import * as argon2 from 'argon2';
import { ValidationError } from 'class-validator';
import { fileTypeFromBuffer } from 'file-type';
import _ from 'lodash';
export function validateHash(
  password: string | undefined,
  hash: string | undefined | null,
): Promise<boolean> {
  if (!password || !hash) return Promise.resolve(false);
  console.log('PASSWORD : ', password);
  return argon2.verify(hash, password);
}

export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, argon2Config);
}

export function getPrefixSetting(group: string) {
  return `${group}.`;
}

export function normalizeValidationErrors(
  errors: ValidationError[],
): ValidationError[] {
  for (const error of errors) {
    if (error.children?.length) {
      normalizeValidationErrors(error.children);
    }
    delete error.children;

    if (error.constraints) {
      for (const key of Object.keys(error.constraints)) {
        if (!error.constraints[key]) {
          error.constraints[key] = `error.fields.${_.snakeCase(key)}`;
        }
      }
    }
  }
  return errors;
}
export async function detectRealFileType(buffer: Buffer) {
  return fileTypeFromBuffer(buffer);
}
export function generateRandomId(length = 6): string {
  return randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}
