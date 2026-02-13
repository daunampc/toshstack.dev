import { EmailField } from '@server/decorators/field.decorators';
import { UserDto } from '@server/modules/users/dto/user.dto';

export class RegisterResponseDto {
  @EmailField()
  at!: string;
  constructor(user: UserDto) {
    Object.assign(this, user);
  }
}
