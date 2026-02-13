import { CreateOtpResult } from '@server/modules/otp/types/otp.types';

export interface VerifyPasswordResult {
  is_verify: boolean;
  otp?: CreateOtpResult;
}
