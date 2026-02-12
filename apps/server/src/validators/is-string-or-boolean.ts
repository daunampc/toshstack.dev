import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsStringOrBoolean(validationOptions: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isStringOrBoolean',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' || typeof value === 'boolean';
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a string or boolean`;
        },
      },
    });
  };
}
