import { UserEntity } from '@server/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { WalletCurrent } from '../enums/wallet-current.enum';
import { WalletStatus } from '../enums/wallet-status.enum';
import { WalletTransactionEntity } from './wallet-transaction.entity';

@Entity('wallets')
export class WalletEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => WalletTransactionEntity, (wall_trans) => wall_trans.wallet, {
    cascade: true,
  })
  @JoinColumn({ name: 'wallet_transaction_id' })
  wallet_transaction!: WalletTransactionEntity;

  @OneToOne(() => UserEntity, (user) => user.wallet, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'bigint', default: 0 })
  balance!: string;

  @Column({ type: 'int', default: 0 })
  coin!: number;

  @Column({ type: 'enum', enum: WalletStatus, default: WalletStatus.ACTIVE })
  status!: WalletStatus;

  @Column({ type: 'enum', enum: WalletCurrent, default: WalletCurrent.VND })
  currency!: WalletCurrent;

  @VersionColumn()
  version!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
