export class PostReactionDto {
  count: number;
  me: boolean;

  constructor(count: number, me: boolean) {
    this.count = count;
    this.me = me;
  }
}
