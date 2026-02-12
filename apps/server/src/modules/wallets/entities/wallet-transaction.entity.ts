import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WalletEntity } from './wallet.entity';
import { WalletTransacType } from '../enums/wallet-transac-type.enum';

@Entity('wallet_transactions')
export class WalletTransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => WalletEntity, (wallet) => wallet.wallet_transaction)
  wallet!: WalletEntity;

  @Column({ enum: WalletTransacType, nullable: true })
  type?: WalletTransacType;

  @Column({ type: 'decimal' })
  amount!: number;

  @Column({ type: 'decimal' })
  balance_before!: number;

  @Column({ type: 'decimal' })
  balance_after!: number;

  @CreateDateColumn()
  created_at!: Date;
}
