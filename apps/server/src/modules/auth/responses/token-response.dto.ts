import { NumberField, StringField } from '@/decorators/field.decorators';

export class TokenResponseDto {
  @StringField()
  token!: string;

  constructor(data: { expiresIn: number; token: string }) {
    this.token = data.token;
  }
}
