import {
  registerDecorator,
  ValidateIf,
  ValidationOptions,
} from 'class-validator';
interface IsFileOptions {
  mime?: ('image/jpg' | 'image/png' | 'image/jpeg')[];
}

export function IsNullable(options?: ValidationOptions): PropertyDecorator {
  return ValidateIf((_obj, value) => value !== null, options);
}
export function IsUndefinable(options?: ValidationOptions): PropertyDecorator {
  return ValidateIf((_obj, value) => value !== undefined, options);
}
