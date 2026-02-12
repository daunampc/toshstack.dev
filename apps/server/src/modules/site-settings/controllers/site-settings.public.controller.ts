import { Controller, Get, Param } from '@nestjs/common';
import { SiteSettingsService } from '../site-settings.service';
import { SiteSettingType } from '../enums/site-setting-type.enum';

@Controller('site-settings')
export class SiteSettingPublicController {
  constructor(private readonly siteSettingService: SiteSettingsService) {}
  @Get(':type')
  async getSiteSetting(@Param('type') type: SiteSettingType) {
    return await this.siteSettingService.getSiteSettingPublic(type);
  }
}
