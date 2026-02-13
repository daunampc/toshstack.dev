import {
  BooleanFieldOptional,
  NumberFieldOptional,
} from '@server/decorators/field.decorators';

export class FollowerDto {
  @NumberFieldOptional()
  count!: number;
  @BooleanFieldOptional()
  me!: boolean;

  constructor(count: number, me: boolean) {
    this.count = count;
    this.me = me;
  }
}
