import { UserEntity } from '@/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_settings')
@Index(['user_id', 'key'], { unique: true })
export class UserSettingEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (u) => u.user_settings)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'uuid' })
  user_id!: string;

  @Column({ type: 'varchar', length: 150 })
  key!: string;

  @Column({ type: 'varchar', length: 100 })
  value!: string | boolean;

  @UpdateDateColumn()
  updatedAt!: Date;
}
