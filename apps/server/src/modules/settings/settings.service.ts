import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSettingEntity } from './entities/user-setting.entity';
import { Like, Repository } from 'typeorm';
import { PROFILE_SETTING_SCHEMA } from './schemas/user-settings/profile-setting.schema';
import { ACCOUNT_SETTING_SCHEMA } from './schemas/user-settings/account-setting.schema';
import { PrefixSetting } from './enums/prefix-setting.enum';
import { PREFERENCE_SETTING_SCHEMA } from './schemas/user-settings/preference-setting.schema';
import { SettingDefinitionEntity } from './entities/setting-definition.entity';
import {
  SettingDefinitionControl,
  SettingDefinitionKey,
  SettingUserDataMap,
} from './types/setting-definition.types';
import { NOTIFICATION_SETTING_SCHEMA } from './schemas/user-settings/notification-setting.schema';
import { PatchsettingDto } from './dto/patch-setting-user.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(UserSettingEntity)
    private readonly userSettingRepo: Repository<UserSettingEntity>,

    @InjectRepository(SettingDefinitionEntity)
    private readonly settingDefinRepo: Repository<SettingDefinitionEntity>,
  ) {}

  findSettings(type: PrefixSetting, user_id?: string) {
    return this.filterSchemaByGroup(type, user_id);
  }

  // async updateUserSetting(prefix: PrefixSetting, data: PatchsettingDto) {
  //   return await this.patchSetting(prefix, data);
  // }

  async patchSetting(data: PatchsettingDto, user_id: string) {
    const { key, value } = data;
    const result = await this.userSettingRepo.upsert(
      {
        user_id,
        key,
        value,
      },
      ['user_id', 'key'],
    );
    return result;
  }

  async filterSchemaByGroup(type: PrefixSetting, user_id?: string) {
    const prefix = `${type}.`;
    let result = null;
    if (type === PrefixSetting.PROFILE) {
      result = Object.entries(PROFILE_SETTING_SCHEMA).filter(([key]) =>
        key.startsWith(prefix),
      );
    }
    if (type === PrefixSetting.ACCOUNT) {
      result = Object.entries(ACCOUNT_SETTING_SCHEMA).filter(([key]) =>
        key.startsWith(prefix),
      );
    }
    if (type === PrefixSetting.NOTIFICATION) {
      result = Object.entries(NOTIFICATION_SETTING_SCHEMA).filter(([key]) =>
        key.startsWith(prefix),
      );
    }
    if (type === PrefixSetting.PREFERENCE) {
      result = Object.entries(PREFERENCE_SETTING_SCHEMA).filter(([key]) =>
        key.startsWith(prefix),
      );
    }
    const userRows = await this.userSettingRepo.find({
      where: [
        {
          user_id: user_id ?? '',
        },
        {
          key: Like(`${type}.%`),
        },
      ],
    });

    const uiRows = await this.settingDefinRepo.find({
      where: {
        group: type,
      },
    });
    const userMap = new Map(userRows.map((r) => [r.key, r.value]));
    const metaMap = new Map(uiRows.map((m) => [m.key, m]));
    const data: SettingUserDataMap = {};
    if (result) {
      for (const [key, core] of result) {
        const value = userMap.has(key) ? userMap.get(key) : core.default;
        const meta = metaMap.get(key);

        data[key.replace(prefix, '')] = {
          type: core.type,
          default: value as string,
          ui: meta
            ? {
                key: meta.key as SettingDefinitionKey,
                group: meta?.group,
                control: meta.control as SettingDefinitionControl,
                description: meta.description || null,
                label: meta.label,
                options: meta.options || null,
                section: meta.section,
              }
            : null,
        };
      }
    }

    return data;
  }
}
