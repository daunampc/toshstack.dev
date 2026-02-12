import { StringField } from '@/decorators/field.decorators';

export class UpdateProfileResponseDto {
  @StringField()
  message!: string;
  constructor(message: string) {
    this.message = message;
  }
}
