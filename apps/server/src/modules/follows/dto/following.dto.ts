import {
  BooleanFieldOptional,
  NumberFieldOptional,
} from '@/decorators/field.decorators';

export class FollowingDto {
  @NumberFieldOptional()
  count!: number;
  @BooleanFieldOptional()
  me!: boolean;

  constructor(count: number, me: boolean) {
    this.count = count;
    this.me = me;
  }
}
