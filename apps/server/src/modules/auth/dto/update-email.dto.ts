import { EmailField, StringField } from '@server/decorators/field.decorators';

export class UpdateEmailDto {
  @EmailField()
  email_new!: string;

  @StringField()
  otp!: string;
}
