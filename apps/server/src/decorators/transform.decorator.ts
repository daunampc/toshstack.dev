import _ from 'lodash';

import { Transform, type TransformFnParams } from 'class-transformer';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
export function ToArray(): PropertyDecorator {
  return Transform(
    ({ value }: TransformFnParams): unknown => {
      if (!value) {
        return value;
      }
      return _.castArray(value);
    },
    {
      toClassOnly: true,
    },
  );
}
export function ToDefault(defaultValue: unknown): PropertyDecorator {
  return Transform((params): unknown => {
    if (params.value === undefined || params.value === null) {
      return defaultValue;
    }

    return params.value;
  });
}
export function ToBoolean(): PropertyDecorator {
  return Transform(
    ({ value }: TransformFnParams): unknown => {
      switch (value) {
        case 'true':
          return true;
        case 'false':
          return false;
        default:
          return value;
      }
    },
    {
      toClassOnly: true,
    },
  );
}
export function Trim(trimNewLines: boolean): PropertyDecorator {
  return Transform((params): string[] | string => {
    const value = params.value as string[] | string;

    if (!value) {
      return value;
    }

    if (Array.isArray(value)) {
      return value.map((v) => {
        const trimmedValue = v.trim();

        if (trimNewLines) {
          return trimmedValue.replaceAll(/\s\s+/g, ' ');
        }

        return trimmedValue;
      });
    }

    const trimmedValue = value.trim();

    if (trimNewLines) {
      return trimmedValue.replaceAll(/\s\s+/g, ' ');
    }

    return trimmedValue;
  });
}
export function PhoneNumberSerializer(): PropertyDecorator {
  return Transform(
    (params) => parsePhoneNumberWithError(params.value as string).number,
  );
}

export function IsFile() {}
