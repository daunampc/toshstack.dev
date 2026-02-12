import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';

import { CommentReactionsModule } from '../comment-reactions/comment-reactions.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]), CommentReactionsModule],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
