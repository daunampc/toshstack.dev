export class CommentReactionDto {
  count: number;
  me: boolean;

  constructor(count: number, me: boolean) {
    this.count = count;
    this.me = me;
  }
}
