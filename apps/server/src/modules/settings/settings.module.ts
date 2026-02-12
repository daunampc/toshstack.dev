import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSettingEntity } from './entities/user-setting.entity';
import { AdminSettingEntiy } from './entities/admin-setting.entity';
import { SettingDefinitionEntity } from './entities/setting-definition.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserSettingEntity,
      AdminSettingEntiy,
      SettingDefinitionEntity,
    ]),
  ],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
