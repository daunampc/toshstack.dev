import {
  ClassField,
  StringFieldOptional,
  TextAreaFieldOptional,
} from '@/decorators/field.decorators';
import { ProfileEntity } from '../entities/profile.entity';
import { CountryDto } from '@/modules/countries/dto/country.dto';

export class ProfileDto {
  @StringFieldOptional({ nullable: true })
  avatar_url?: string | null;

  @StringFieldOptional({ nullable: true, maxLength: 255 })
  display_name?: string | null;
  //
  @TextAreaFieldOptional({ nullable: true })
  about_me?: string | null;

  @StringFieldOptional({ nullable: true })
  banner_url?: string | null;

  @StringFieldOptional({ nullable: true, maxLength: 155 })
  heading?: string | null;

  @StringFieldOptional({ nullable: true, maxLength: 255 })
  description?: string | null;

  @StringFieldOptional()
  gender!: string | null;
  //
  // @PhoneFieldOptional({ nullable: true })
  // phone?: string | null;

  @StringFieldOptional({ nullable: true, maxLength: 255 })
  address?: string | null;

  @ClassField(() => CountryDto)
  country!: CountryDto | null;

  constructor(profile: ProfileEntity) {
    this.avatar_url = profile.avatar_url;
    this.display_name = profile.display_name;
    this.about_me = profile.about_me;
    this.banner_url = profile.banner_url;
    this.heading = profile.heading;
    this.address = profile.address;
    this.gender = profile.gender;
    this.country = new CountryDto(profile.country);
  }
}
