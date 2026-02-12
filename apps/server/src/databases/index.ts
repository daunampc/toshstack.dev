// src/database/seeds/index.ts
import { DataSource } from 'typeorm';
import { seedRoles } from './roles.need';
import { seedSettings } from './settings.need';
import { seedCountries } from './countries.need';

export async function runSeeds(dataSource: DataSource) {
  await seedRoles(dataSource);
  await seedSettings(dataSource);
  await seedCountries(dataSource);
}
