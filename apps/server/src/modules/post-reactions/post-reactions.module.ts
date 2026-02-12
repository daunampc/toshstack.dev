import { Module } from '@nestjs/common';
import { PostReactionsService } from './post-reactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostReactionEntity } from './entities/post-reaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostReactionEntity])],
  providers: [PostReactionsService],
  exports: [PostReactionsService],
})
export class PostReactionsModule {}
