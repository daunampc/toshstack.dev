import { StringFieldOptional } from '@/decorators/field.decorators';

export class GetDetailPostDto {
  @StringFieldOptional({ minLength: 1, maxLength: 155 })
  slug!: string;
}
