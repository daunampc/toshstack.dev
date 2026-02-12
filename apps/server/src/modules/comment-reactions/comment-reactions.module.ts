import { Module } from '@nestjs/common';
import { CommentReactionsService } from './comment-reactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentReactionEntity } from './entities/comment-reaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentReactionEntity])],
  providers: [CommentReactionsService],
  exports: [CommentReactionsService],
})
export class CommentReactionsModule {}
