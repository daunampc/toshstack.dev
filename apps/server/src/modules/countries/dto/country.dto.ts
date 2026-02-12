import {
  BooleanField,
  StringField,
  StringFieldOptional,
} from '@/decorators/field.decorators';
import { CountryEntity } from '../entities/country.entity';

export class CountryDto {
  @StringField()
  code!: string;

  @StringField()
  name!: string;

  @StringFieldOptional()
  phone_code!: string | null;

  @StringFieldOptional()
  currency!: string | null;

  @BooleanField({})
  is_active!: boolean;

  constructor(country: CountryEntity | null) {
    if (country) {
      this.code = country.code;
      this.name = country.name;
      this.phone_code = country.phone_code;
      this.currency = country.currency;
      this.is_active = country.is_active;
    }
  }
}
