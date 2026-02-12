import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { CurrencyCountry } from '../enums/currency.enum';

@Entity('countries')
@Unique(['code'])
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column({ type: 'char', length: 4 })
  code!: string;

  @Column({ type: 'varchar', length: 200 })
  name!: string;

  @Column({ type: 'varchar', length: 20, default: null })
  phone_code!: string | null;

  @Column({ type: 'enum', enum: CurrencyCountry, default: null })
  currency!: CurrencyCountry | null;

  @Column({ type: 'boolean', default: false })
  is_active!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
