import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SiteSettingEntity } from './entites/site-setting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SiteSettingType } from './enums/site-setting-type.enum';
import { NotFoundAppException } from '@/exceptions/http.exception';

@Injectable()
export class SiteSettingsService {
  constructor(
    @InjectRepository(SiteSettingEntity)
    private readonly siteSettingRepo: Repository<SiteSettingEntity>,
  ) {}

  async getSiteSettingPublic(
    type: SiteSettingType,
  ): Promise<SiteSettingEntity[]> {
    const settings = await this.siteSettingRepo.findBy({
      type,
    });
    if (!settings)
      throw new NotFoundAppException('SETTING_NOT_FOUND', 'Setting not found');
    return settings;
  }
}
