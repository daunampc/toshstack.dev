import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin_settings')
export class AdminSettingEntiy {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}
