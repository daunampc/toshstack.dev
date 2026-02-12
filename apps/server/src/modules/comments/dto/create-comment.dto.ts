import {
  StringField,
  StringFieldOptional,
} from '@/decorators/field.decorators';

export class CreateCommentDto {
  @StringFieldOptional()
  parent_comment_id!: string | null;

  @StringField()
  content!: string;

  @StringField()
  post_id!: string;
}
