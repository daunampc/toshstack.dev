import { StringField } from '@/decorators/field.decorators';

export class UpdateEmailResponseDto {
  @StringField()
  message!: string;

  constructor(message: string) {
    this.message = message;
  }
}
