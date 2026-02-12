import {
  BooleanFieldOptional,
  EmailField,
  StringField,
} from '@/decorators/field.decorators';

export class UserLoginDto {
  @EmailField()
  email!: string;

  @StringField()
  password!: string;

  @BooleanFieldOptional()
  is_policy!: boolean;
}
