import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsPhoneNumber,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  NotEquals,
  ValidateNested,
} from 'class-validator';
import {
  PhoneNumberSerializer,
  ToArray,
  ToBoolean,
  ToDefault,
  Trim,
} from './transform.decorator';
import { IsNullable, IsUndefinable } from './validatior.decorator';
import { Constructor } from '@server/types';

interface IBooleanFieldOptions {
  each?: boolean;
  nullable?: boolean;
  groups?: string[];
}
interface IFieldOptions {
  each?: boolean;
  nullable?: boolean;
  groups?: string[];
}

type IEnumFieldOptions = IFieldOptions;
interface INumberFieldOptions extends IFieldOptions {
  default?: number;
  min?: number;
  max?: number;
  int?: boolean;
  isPositive?: boolean;
}
interface IStringFieldOptions extends IFieldOptions {
  minLength?: number;
  maxLength?: number;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
  trimNewLines?: boolean;
}
type IClassFieldOptions = IFieldOptions;
export function DateField(options: IFieldOptions = {}) {
  const decorators = [Type(() => Date), IsDate()];
  if (options.nullable) {
    decorators.push(IsNullable({ each: options.each ?? false }));
  } else {
    decorators.push(NotEquals(null));
  }
  return applyDecorators(...decorators);
}
export function StringField(options: IStringFieldOptions = {}) {
  const decorators = [
    Type(() => String),
    IsString({ each: options.each ?? false }),
    Trim(options.trimNewLines ?? true),
  ];
  if (options.nullable) {
    decorators.push(IsNullable({ each: options.each ?? false }));
  } else {
    decorators.push(NotEquals(null, { each: options.each ?? false }));
  }

  const minLength = options.minLength ?? 1;

  decorators.push(
    MinLength(minLength, {
      each: options.each ?? false,
      message: `The minimum length is ${options.minLength} characters.`,
    }),
  );

  if (options.maxLength) {
    decorators.push(
      MaxLength(options.maxLength, {
        each: options.each ?? false,
        message: `The maximum length is ${options.maxLength} characters.`,
      }),
    );
  }

  return applyDecorators(...decorators);
}
export function ClassField<TClass extends Constructor>(
  getClass: () => TClass,
  options: IClassFieldOptions = {},
) {
  const entity = getClass();

  const decorators = [
    Type(() => entity),
    ValidateNested({ each: options.each ?? false }),
  ];
  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }
  return applyDecorators(...decorators);
}
export function EmailField(options: IStringFieldOptions = {}) {
  const decorators = [
    IsEmail(),
    StringField({ toLowerCase: true, ...options }),
  ];
  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }
  return applyDecorators(...decorators);
}
export function NumberField(options: INumberFieldOptions = {}) {
  const decorators = [ToDefault(options.default), Type(() => Number)];

  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }

  if (options.each) {
    decorators.push(ToArray());
  }
  if (options.int) {
    decorators.push(IsInt({ each: options.each ?? false }));
  } else {
    decorators.push(IsNumber({}, { each: options.each ?? false }));
  }

  if (typeof options.min === 'number') {
    decorators.push(Min(options.min, { each: options.each ?? false }));
  }
  if (typeof options.max === 'number') {
    decorators.push(Max(options.max, { each: options.each ?? false }));
  }

  if (options.isPositive) {
    decorators.push(IsPositive({ each: options.each ?? false }));
  }
  return applyDecorators(...decorators);
}
export function BooleanField(options: IBooleanFieldOptions = {}) {
  const decorators = [Type(() => Boolean), ToBoolean()];
  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }
  return applyDecorators(...decorators);
}

export function PhoneField(options: IFieldOptions = {}) {
  const decorators = [IsPhoneNumber(), PhoneNumberSerializer()];
  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }
  return applyDecorators(...decorators);
}
export function UUIDField(options: IFieldOptions = {}) {
  const decorators = [
    Type(() => String),
    IsUUID('4', { each: options.each ?? false }),
  ];
  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }
  if (options.each) {
    decorators.push(ToArray());
  }
  return applyDecorators(...decorators);
}
export function EnumField<TEnum extends object>(
  getEnum: () => TEnum,
  options: IEnumFieldOptions = {},
) {
  const enumValue = getEnum();
  const decorators = [IsEnum(enumValue, { each: options.each ?? false })];
  if (options.nullable) {
    decorators.push(IsNullable());
  } else {
    decorators.push(NotEquals(null));
  }
  if (options.each) {
    decorators.push(ToArray());
  }
  return applyDecorators(...decorators);
}
export function TextAreaField(
  options: Omit<IStringFieldOptions, 'trimNewLines'> = {},
) {
  return StringField({
    ...options,
    trimNewLines: false,
  });
}

export function StringFieldOptional(
  options: IStringFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), StringField({ ...options }));
}
export function BooleanFieldOptional(
  options: IBooleanFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), BooleanField(options));
}

export function DateFieldOptional(
  options: IFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), DateField(options));
}

export function NumberFieldOptional(
  options: INumberFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), NumberField(options));
}

export function EmailFieldOptional(options: IStringFieldOptions) {
  return applyDecorators(IsUndefinable(), EmailField(options));
}

export function PhoneFieldOptional(options: IFieldOptions) {
  return applyDecorators(IsUndefinable(), PhoneField(options));
}
export function UUIDFieldOptional(options: IFieldOptions) {
  return applyDecorators(IsUndefinable(), UUIDField(options));
}
export function ClassFieldOptional<TClass extends Constructor>(
  getClass: () => TClass,
  options: IClassFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), ClassField(getClass, options));
}
export function EnumFieldOptional<TEnum extends object>(
  getEnum: () => TEnum,
  options: IEnumFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), EnumField(getEnum, options));
}
export function TextAreaFieldOptional(
  options: IStringFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsUndefinable(), TextAreaField(options));
}
