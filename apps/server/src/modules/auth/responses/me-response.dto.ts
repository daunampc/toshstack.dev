import { EmailField } from '@server/decorators/field.decorators';
import { UserFollowDto } from '@server/modules/follows/dto/user-follow.dto';
import { UserEntity } from '@server/modules/users/entities/user.entity';

export class MeResponseDto {
  @EmailField()
  email!: string;

  constructor(user: UserEntity, user_follow: UserFollowDto) {
    this.email = user.email;
    Object.assign(this, user.toDto({ user_follow }));
  }
}
