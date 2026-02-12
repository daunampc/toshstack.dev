import { UserEntity } from '@/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserSubscriptionType } from '../enums/user-subscription-type.enum';

@Entity('user_subscriptions')
export class UserSubscriptionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @PrimaryColumn('uuid')
  user_id!: string;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ enum: UserSubscriptionType })
  type!: UserSubscriptionType;

  @CreateDateColumn()
  subscription_at!: Date;
}
