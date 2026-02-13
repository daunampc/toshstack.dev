import { PageOptionsDto } from '@server/common/dto/page-options.dto';
import {
  EnumFieldOptional,
  StringField,
} from '@server/decorators/field.decorators';
import { CommentSortBy } from '../enums/comment-sort-by.enum';

export class GetCommentPostDto extends PageOptionsDto {
  @StringField()
  post_id!: string;

  @EnumFieldOptional(() => CommentSortBy)
  sort_by!: CommentSortBy;
}
