import { DynamicModule, Global, Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OtpModuleOptions } from './types/otp.types';
import { OTP_OPTIONS } from '@/constants/otp.constants';

@Global()
@Module({})
export class OtpModule {
  static forRoot(options: OtpModuleOptions): DynamicModule {
    if (!options.pepper) {
      throw new Error('OtpModule requires pepper');
    }
    return {
      module: OtpModule,
      providers: [
        {
          provide: OTP_OPTIONS,
          useValue: options,
        },
        OtpService,
      ],
      exports: [OtpService],
    };
  }
}
