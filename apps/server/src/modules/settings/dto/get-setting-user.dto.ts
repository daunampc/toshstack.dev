import { IsEnum } from 'class-validator';
import { PrefixSetting } from '../enums/prefix-setting.enum';

export class GetSettingUserDto {
  @IsEnum(PrefixSetting)
  prefix!: PrefixSetting;
}
