import { CreateOtpResult } from '@server//modules/otp/types/otp.types';
import { UserEntity } from '@server//modules/users/entities/user.entity';

export interface VerifyOtpInput {
  user: UserEntity;
  otp: CreateOtpResult;
}
