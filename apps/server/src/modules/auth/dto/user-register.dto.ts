import { EmailField, StringField } from '@/decorators/field.decorators';

export class UserRegisterDto {
  @EmailField()
  readonly email!: string;

  @StringField({ minLength: 6, maxLength: 155 })
  readonly password!: string;

  @StringField({ minLength: 6, maxLength: 155 })
  readonly re_password!: string;
}
