import { StringField } from '@server/decorators/field.decorators';

export class VerifyPasswordDto {
  @StringField()
  password!: string;
}
