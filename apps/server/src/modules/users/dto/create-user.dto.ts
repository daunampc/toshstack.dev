import { EmailField, StringField } from '@server/decorators/field.decorators';

export class CreateUserDTO {
  @EmailField({ toLowerCase: true })
  email!: string;

  @StringField({ toLowerCase: true })
  password!: string;
}
