import { BooleanField, NumberField } from '@/decorators/field.decorators';
import { PageOptionsDto } from './page-options.dto';

interface PageMetaDtoParameters {
  pageOptionsDto: PageOptionsDto;
  total: number;
}
export class PageMetaDto {
  @NumberField()
  readonly page!: number;

  @NumberField()
  readonly limit!: number;

  @NumberField()
  readonly total!: number;

  @NumberField()
  readonly total_pages!: number;

  @BooleanField()
  readonly hasPreviousPage!: boolean;

  @BooleanField()
  readonly hasNextPage!: boolean;

  constructor({ pageOptionsDto, total }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.limit = pageOptionsDto.limit;
    this.total = total;
    this.total_pages = Math.ceil(this.total / this.limit);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.total_pages;
  }
}
