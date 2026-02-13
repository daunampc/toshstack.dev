import { Auth } from '@server/decorators/http.decorator';
import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { SettingsService } from '../settings.service';
import { GetSettingUserDto } from '../dto/get-setting-user.dto';
import { PatchsettingDto } from '../dto/patch-setting-user.dto';
import { AuthUser } from '@server/decorators/auth-user.decorator';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Controller('settings/user')
@Auth('member')
export class SettingsUserController {
  constructor(private readonly settingService: SettingsService) {}
  @Get(':prefix')
  getUserSettings(
    @Param() dto: GetSettingUserDto,
    @AuthUser() user: UserEntity,
  ) {
    return this.settingService.findSettings(dto.prefix, user.id);
  }

  @Patch('')
  patchUserSetting(
    @Body() data: PatchsettingDto,
    @AuthUser() user: UserEntity,
  ) {
    console.log(data);
    return this.settingService.patchSetting(data, user.id);
  }
}
