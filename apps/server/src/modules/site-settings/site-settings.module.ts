import { Module } from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteSettingEntity } from './entites/site-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SiteSettingEntity])],
  providers: [SiteSettingsService],
  exports: [SiteSettingsService],
})
export class SiteSettingsModule {}
