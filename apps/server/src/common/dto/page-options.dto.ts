import {
  NumberFieldOptional,
  StringFieldOptional,
} from '@/decorators/field.decorators';

export class PageOptionsDto {
  @NumberFieldOptional({
    int: true,
    default: 1,
  })
  readonly page: number = 1;

  @NumberFieldOptional({
    min: 1,
    default: 10,
    max: 50,
    int: true,
  })
  readonly limit: number = 10;

  get skip(): number {
    return (this.page - 1) * this.limit;
  }

  @StringFieldOptional()
  readonly q?: string;
}
