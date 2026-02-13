import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { RoleEntity } from './role.entity';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Entity('user_roles')
@Unique(['user', 'role'])
export class UserRoleEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;

  @ManyToOne(() => RoleEntity)
  role!: RoleEntity;
}
