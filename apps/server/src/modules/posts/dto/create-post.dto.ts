import {
  StringField,
  StringFieldOptional,
} from '@/decorators/field.decorators';

export class CreatePostDto {
  @StringField()
  title!: string;

  @StringFieldOptional()
  description!: string;

  @StringField()
  category!: string;

  @StringFieldOptional()
  community!: string | null;

  @StringFieldOptional({ each: true })
  tags!: string;

  @StringField()
  content!: string;
}
