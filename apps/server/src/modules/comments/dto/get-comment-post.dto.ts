import { PageOptionsDto } from '@/common/dto/page-options.dto';
import { EnumFieldOptional, StringField } from '@/decorators/field.decorators';
import { CommentSortBy } from '../enums/comment-sort-by.enum';

export class GetCommentPostDto extends PageOptionsDto {
  @StringField()
  post_id!: string;

  @EnumFieldOptional(() => CommentSortBy)
  sort_by!: CommentSortBy;
}
