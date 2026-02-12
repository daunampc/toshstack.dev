import { CountryEntity } from '@/modules/countries/entities/country.entity';
import { CurrencyCountry } from '@/modules/countries/enums/currency.enum';
import { DataSource } from 'typeorm';

export const COUNTRIES_SEED = [
  {
    code: 'VN',
    name: 'Việt Nam',
    phoneCode: '+84',
    currency: CurrencyCountry.VN,
    isActive: true,
  },
  {
    code: 'US',
    name: 'United States',
    phoneCode: '+1',
    currency: CurrencyCountry.US,
    isActive: true,
  },
  {
    code: 'JP',
    name: 'Japan',
    phoneCode: '+81',
    currency: CurrencyCountry.JP,
    isActive: true,
  },
  {
    code: 'KR',
    name: 'South Korea',
    phoneCode: '+82',
    currency: CurrencyCountry.KR,
    isActive: true,
  },
  {
    code: 'SG',
    name: 'Singapore',
    phoneCode: '+65',
    currency: CurrencyCountry.SG,
    isActive: true,
  },
  {
    code: 'TH',
    name: 'Thailand',
    phoneCode: '+66',
    currency: CurrencyCountry.TH,
    isActive: true,
  },
];
export async function seedCountries(datasource: DataSource) {
  const contriesRepo = datasource.getRepository(CountryEntity);
  await contriesRepo.upsert(COUNTRIES_SEED, ['code']);
}
