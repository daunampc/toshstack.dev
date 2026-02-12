import { EmailField, StringField } from '@/decorators/field.decorators';

export class UpdateEmailDto {
  @EmailField()
  email_new!: string;

  @StringField()
  otp!: string;
}
