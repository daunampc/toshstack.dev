import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { RoleEntity } from './role.entity';
import { PermissionEntity } from '@server/modules/permissions/entities/permission.entity';

@Entity('role_permissions')
@Unique(['role', 'permission'])
export class RolePermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => RoleEntity)
  role!: RoleEntity;

  @ManyToOne(() => PermissionEntity)
  permission!: PermissionEntity;
}
