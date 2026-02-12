import { EmailField } from '@/decorators/field.decorators';
import { UserDto } from '@/modules/users/dto/user.dto';

export class RegisterResponseDto {
  @EmailField()
  at!: string;
  constructor(user: UserDto) {
    Object.assign(this, user);
  }
}
