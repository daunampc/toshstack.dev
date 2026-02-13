import { PageOptionsDto } from '@server/common/dto/page-options.dto';
import {
  StringField,
  StringFieldOptional,
} from '@server/decorators/field.decorators';

export class GetPostDto extends PageOptionsDto {
  @StringFieldOptional()
  sort_by?: string;
}

export class GetPostUserDto extends GetPostDto {
  @StringField()
  handle!: string;
}
