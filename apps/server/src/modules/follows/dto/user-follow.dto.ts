import { ClassField } from '@/decorators/field.decorators';
import { FollowerDto } from './follower.dto';
import { FollowingDto } from './following.dto';

export class UserFollowDto {
  @ClassField(() => FollowerDto)
  follower!: FollowerDto;

  @ClassField(() => FollowingDto)
  following!: number;

  constructor(follower: FollowerDto, following: number) {
    this.follower = follower;
    this.following = following;
  }
}
