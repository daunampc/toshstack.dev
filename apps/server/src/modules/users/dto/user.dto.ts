import {
  ClassField,
  DateFieldOptional,
  NumberFieldOptional,
  StringField,
} from '@server/decorators/field.decorators';
import { ProfileDto } from '@server/modules/profiles/dto/profile.dto';
import { UserFollowDto } from '@server/modules/follows/dto/user-follow.dto';
import { UserEntity } from '../entities/user.entity';

export type UserDtoOptions = Partial<{
  user_follow: UserFollowDto;
}>;
export class UserDto {
  @StringField()
  handle!: string;

  @DateFieldOptional({ nullable: true })
  last_seen_at!: Date | null;

  @NumberFieldOptional({ nullable: true })
  version!: number;

  @ClassField(() => ProfileDto)
  profile!: ProfileDto;

  @ClassField(() => UserFollowDto)
  user_follow?: UserFollowDto | null;

  @DateFieldOptional({ nullable: true })
  created_at!: Date;

  constructor(user: UserEntity, options?: UserDtoOptions) {
    this.handle = user.handle;
    this.last_seen_at = user.last_seen_at;
    this.version = user.version;
    this.profile = user.profile.toDto();
    this.created_at = user.created_at;
    this.user_follow = options?.user_follow ?? null;
  }
}
