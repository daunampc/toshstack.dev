import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { CommentReactionEntity } from './entities/comment-reaction.entity';
import { DataSource, Repository } from 'typeorm';
import { TooggleCommentReaction } from './types/comment-reaction.types';

@Injectable()
export class CommentReactionsService {
  constructor(
    @InjectRepository(CommentReactionEntity)
    private readonly commentReactionRepo: Repository<CommentReactionEntity>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async toggleCommentReaction(
    payload: TooggleCommentReaction,
  ): Promise<'ADD' | 'REMOVE' | 'SWITCH'> {
    return this.dataSource.transaction(async (manager) => {
      // 1️⃣ lock đúng 1 row (nếu tồn tại)
      const existing = await manager
        .getRepository(CommentReactionEntity)
        .createQueryBuilder('r')
        .setLock('pessimistic_write')
        .where('r.user_id = :userId', { userId: payload.user_id })
        .andWhere('r.comment_id = :commentId', {
          commentId: payload.comment_id,
        })
        .getOne();

      // 2️⃣ toggle off
      if (existing && existing.reaction === payload.reaction) {
        await manager.delete(CommentReactionEntity, {
          user_id: payload.user_id,
          comment_id: payload.comment_id,
        });

        return 'REMOVE';
      }

      // 3️⃣ switch or add
      await manager.upsert(CommentReactionEntity, payload, {
        conflictPaths: ['user_id', 'comment_id'],
      });

      return existing ? 'SWITCH' : 'ADD';
    });
  }
}
