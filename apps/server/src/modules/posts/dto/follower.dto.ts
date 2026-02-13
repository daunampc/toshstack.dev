import {
  BooleanFieldOptional,
  NumberFieldOptional,
} from '@server/decorators/field.decorators';

export class FollowerDto {
  @BooleanFieldOptional()
  my_follower!: boolean;

  @NumberFieldOptional()
  follower_count!: number;

  constructor(my_follower: boolean, follower_count: number) {
    this.my_follower = my_follower;
    this.follower_count = follower_count;
  }
}
