import { CreateOtpResult } from '@/modules/otp/types/otp.types';

export interface VerifyPasswordResult {
  is_verify: boolean;
  otp?: CreateOtpResult;
}
