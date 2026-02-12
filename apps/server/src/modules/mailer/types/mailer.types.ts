import { CreateOtpResult } from '@/modules/otp/types/otp.types';
import { UserEntity } from '@/modules/users/entities/user.entity';

export interface VerifyOtpInput {
  user: UserEntity;
  otp: CreateOtpResult;
}
