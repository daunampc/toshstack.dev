import { RoleEntity } from '@/modules/roles/entities/role.entity';
import { DataSource } from 'typeorm';

export const DEFAULT_ROLES = [
  {
    key: 'admin',
  },
  {
    key: 'mod',
  },
  {
    key: 'member',
  },
];
export async function seedRoles(dataSource: DataSource) {
  const roleRepo = dataSource.getRepository(RoleEntity);

  await roleRepo.upsert(DEFAULT_ROLES, ['key']);
  console.log('[SEED] Roles seeded');
}
