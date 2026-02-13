import { IsEnum, IsString } from 'class-validator';
import { PrefixSetting } from '../enums/prefix-setting.enum';
import { IsStringOrBoolean } from '@server/validators/is-string-or-boolean';

export class PathParamSettingUserDto {
  @IsEnum(PrefixSetting)
  prefix!: PrefixSetting;
}
export class PatchsettingDto {
  @IsString()
  key!: string;

  @IsStringOrBoolean({})
  value!: string | boolean;
}
