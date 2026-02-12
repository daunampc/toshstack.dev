import { UpdateProfileDto } from '../dto/update-profile.dto';

export interface UpdateProfileInput {
  user_id: string;
  dto: UpdateProfileDto;
}

export interface UpdateProfileResult {
  message: string;
}
