import {
  BooleanFieldOptional,
  EmailField,
  StringField,
} from '@server/decorators/field.decorators';

export class UserLoginDto {
  @EmailField()
  email!: string;

  @StringField()
  password!: string;

  @BooleanFieldOptional()
  is_policy!: boolean;
}
