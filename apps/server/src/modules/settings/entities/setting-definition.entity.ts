import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import type { SettingOptionsUI } from '../types/setting-definition.types';

@Entity('setting_definitions')
@Unique(['label'])
@Index(['key'])
export class SettingDefinitionEntity {
  @PrimaryColumn()
  key!: string;

  @Column({ type: 'varchar', length: 155 })
  group!: string;

  @Column({ type: 'varchar', length: 155 })
  section!: string;

  @Column({ type: 'varchar', length: 155 })
  control!: string;

  @Column({ type: 'varchar', length: 155 })
  label!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string | null;

  @Column({ type: 'jsonb', nullable: true })
  options?: SettingOptionsUI[] | null;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
