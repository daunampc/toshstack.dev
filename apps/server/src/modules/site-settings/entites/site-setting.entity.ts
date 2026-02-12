import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SiteSettingType } from '../enums/site-setting-type.enum';

@Entity('site_settings')
export class SiteSettingEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  key!: string;

  @Column({ type: 'jsonb' })
  value!: string;

  @Column({ enum: SiteSettingType })
  type!: SiteSettingType;
}
