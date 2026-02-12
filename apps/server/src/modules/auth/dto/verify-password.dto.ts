import { StringField } from '@/decorators/field.decorators';

export class VerifyPasswordDto {
  @StringField()
  password!: string;
}
