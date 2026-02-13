import { UserEntity } from '@server/modules/users/entities/user.entity';
import { UpdateEmailDto } from '../dto/update-email.dto';

export interface UpdateEmailInput {
  dto: UpdateEmailDto;
  user: UserEntity;
}

export interface UpdateEmailResult {
  ok: boolean;
}
