import {
  EnumFieldOptional,
  StringFieldOptional,
  TextAreaFieldOptional,
} from '@/decorators/field.decorators';
import { ProfileGender } from '../enums/profile-gender.enum';

export class UpdateProfileDto {
  @StringFieldOptional({ minLength: 2, maxLength: 125 })
  display_name?: string;

  @EnumFieldOptional(() => ProfileGender)
  gender?: ProfileGender;

  @TextAreaFieldOptional({ minLength: 10, maxLength: 500 })
  about_me?: string;

  @StringFieldOptional({ maxLength: 4 })
  country_code?: string;
}
