import { ClassField } from '@/decorators/field.decorators';
import { TokenResponseDto } from './token-response.dto';
import { UserDto } from '@/modules/users/dto/user.dto';

export class LoginResponseDto {
  @ClassField(() => TokenResponseDto)
  access_token!: TokenResponseDto;

  constructor(user: UserDto, token: TokenResponseDto) {
    Object.assign(this, user, token);
  }
}
