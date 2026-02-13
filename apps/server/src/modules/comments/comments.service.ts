import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { GetCommentPostDto } from './dto/get-comment-post.dto';
import { SnowFlakeService } from '@server/shareds/services/snowflake.service';
import { CommentReactionStatus } from '../comment-reactions/enums/comment-reaction-status.enum';
import {
  CommentReactionDislike,
  CommentReactionLike,
} from './types/comment.types';
import { CommentDto } from './dto/comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ConflictAppException } from '@server/exceptions/http.exception';
import { CommentSortBy } from './enums/comment-sort-by.enum';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,
    private readonly snowFlakeService: SnowFlakeService,
  ) {}

  async createComment(dto: CreateCommentDto, user_id: string) {
    const result = this.commentRepo.create({
      id: this.snowFlakeService.generate(),
      content: dto.content,
      post_id: this.snowFlakeService.fromBase36(dto.post_id),
      parent_comment_id: dto.parent_comment_id,
      author: {
        id: user_id,
      },
    });
    if (!result)
      throw new ConflictAppException(
        'CREATE_COMMENT_WORKING',
        'Create comment working',
      );
    const isSaved = await this.commentRepo.save(result);
    if (!isSaved)
      throw new ConflictAppException(
        'CREATE_COMMENT_WORKING',
        'Create comment working',
      );
    const comment = await this.findOneCommentById(isSaved.id, user_id);
    return comment;
  }

  async findOneCommentById(comment_id: string, user_id?: string) {
    const qb = this.commentRepo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.author', 'author')
      .leftJoinAndSelect('author.profile', 'profile')
      .leftJoin('comment_reactions', 'cr', 'cr.comment_id = comment.id')

      .where('comment.id = :comment_id', { comment_id })
      // ===== LIKE COUNT =====
      .addSelect(
        `
      COUNT(
        CASE 
          WHEN cr.reaction = :like THEN 1 
        END
      )
      `,
        'like_count',
      )

      // ===== DISLIKE COUNT =====
      .addSelect(
        `
      COUNT(
        CASE 
          WHEN cr.reaction = :dislike THEN 1 
        END
      )
      `,
        'dislike_count',
      )

      // ===== MY LIKE =====
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM comment_reactions cr2
        WHERE cr2.comment_id = comment.id
          AND cr2.user_id = :user_id
          AND cr2.reaction = :like
      )
      `,
        'my_like',
      )

      // ===== MY DISLIKE =====
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM comment_reactions cr3
        WHERE cr3.comment_id = comment.id
          AND cr3.user_id = :user_id
          AND cr3.reaction = :dislike
      )
      `,
        'my_dislike',
      )

      .groupBy('comment.id')
      .addGroupBy('author.id')
      .addGroupBy('profile.id')
      .setParameters({
        user_id,
        like: CommentReactionStatus.LIKE,
        dislike: CommentReactionStatus.DISLIKE,
      });

    const { entities, raw } = await qb.getRawAndEntities();

    if (!entities.length) return null;
    const comment = entities[0];
    const rawData = raw[0] as CommentReactionLike & CommentReactionDislike;
    if (!comment) return null;
    return new CommentDto(
      comment,
      {
        count: Number(rawData.like_count),
        me: Boolean(rawData.my_like),
      },
      {
        count: Number(rawData.dislike_count),
        me: Boolean(rawData.my_dislike),
      },
    );
  }

  async getCommentsByPostId(options: GetCommentPostDto, user_id?: string) {
    const post_id = this.snowFlakeService.fromBase36(options.post_id);

    const qb = this.commentRepo
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.author', 'author')
      .leftJoinAndSelect('author.profile', 'profile')
      .leftJoin('comment_reactions', 'cr', 'cr.comment_id = comment.id')
      .where('comment.post_id = :post_id')
      .andWhere('comment.parent_comment_id IS NULL') // comment gốc
      .addSelect(
        `
      COUNT(
        CASE 
          WHEN cr.reaction = :like THEN 1 
        END
      )
      `,
        'like_count',
      )

      // ===== COUNT DISLIKE =====
      .addSelect(
        `
      COUNT(
        CASE 
          WHEN cr.reaction = :dislike THEN 1 
        END
      )
      `,
        'dislike_count',
      )

      // ===== MY LIKE =====
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM comment_reactions cr2
        WHERE cr2.comment_id = comment.id
          AND cr2.user_id = :user_id
          AND cr2.reaction = :like
      )
      `,
        'my_like',
      )

      // ===== MY DISLIKE =====
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM comment_reactions cr3
        WHERE cr3.comment_id = comment.id
          AND cr3.user_id = :user_id
          AND cr3.reaction = :dislike
      )
      `,
        'my_dislike',
      )
      .groupBy('comment.id')
      .addGroupBy('author.id')
      .addGroupBy('profile.id')
      .setParameters({
        post_id: post_id,
        user_id: user_id,
        like: CommentReactionStatus.LIKE,
        dislike: CommentReactionStatus.DISLIKE,
      });
    if (options.sort_by === CommentSortBy.NEW) {
      qb.orderBy('comment.created_at', 'DESC');
    }
    if (options.sort_by === CommentSortBy.OLD) {
      qb.orderBy('comment.created_at', 'ASC');
    }

    const { entities, meta, raw } = await qb.pagination<
      CommentEntity & CommentReactionLike & CommentReactionDislike
    >(options);
    const parentIds = entities.map((c) => c.id);
    const replies = await this.getRepliesByParentIds(parentIds, user_id);
    const replyMap = new Map<string, CommentDto[]>();
    for (const reply of replies) {
      const parentId = reply.parent_comment_id;
      if (parentId) {
        if (!replyMap.has(parentId)) {
          replyMap.set(parentId, []);
        }
        replyMap.get(parentId)!.push(reply);
      }
    }
    const data = entities.map((comment, index) => {
      const rawData = raw[index];
      if (!rawData) return;
      const dto = new CommentDto(
        comment,
        { count: Number(rawData.like_count), me: rawData.my_like },
        { count: Number(rawData.dislike_count), me: rawData.my_dislike },
        replyMap.get(comment.id) ?? [],
        replyMap.get(comment.id)?.length ?? 0,
      );

      return dto;
    });

    return {
      data,
      meta,
    };
  }
  async getRepliesByParentIds(
    parentIds: string[],
    user_id?: string,
    limit: number = 3,
  ) {
    if (!parentIds.length) return [];
    const subQb = this.commentRepo
      .createQueryBuilder('reply')
      .select('reply.id', 'id')
      .addSelect(
        `
    ROW_NUMBER() OVER (
      PARTITION BY reply.parent_comment_id
      ORDER BY reply.created_at DESC
    )
    `,
        'rn',
      )
      .where('reply.parent_comment_id IN (:...parentIds)', { parentIds });
    const qb = this.commentRepo
      .createQueryBuilder('reply')
      .innerJoin(
        `(${subQb.getQuery()})`,
        'r',
        'r.id = reply.id AND r.rn <= :limit',
      )
      .leftJoinAndSelect('reply.author', 'author')
      .leftJoinAndSelect('author.profile', 'profile')
      .leftJoin('comment_reactions', 'cr', 'cr.comment_id = reply.id')
      .where('reply.parent_comment_id IN (:...parentIds)')
      .addSelect(
        `
      COUNT(
        CASE 
          WHEN cr.reaction = :like THEN 1 
        END
      )
      `,
        'like_count',
      )
      .addSelect(
        `
      COUNT(
        CASE 
          WHEN cr.reaction = :dislike THEN 1 
        END
      )
      `,
        'dislike_count',
      )
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM comment_reactions cr2
        WHERE cr2.comment_id = reply.id
          AND cr2.user_id = :user_id
          AND cr2.reaction = :like
      )
      `,
        'my_like',
      )
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM comment_reactions cr3
        WHERE cr3.comment_id = reply.id
          AND cr3.user_id = :user_id
          AND cr3.reaction = :dislike
      )
      `,
        'my_dislike',
      )
      .groupBy('reply.id')
      .addGroupBy('author.id')
      .addGroupBy('profile.id')
      .setParameters({
        parentIds,
        user_id,
        limit,
        like: CommentReactionStatus.LIKE,
        dislike: CommentReactionStatus.DISLIKE,
      })
      .orderBy('reply.created_at', 'DESC');

    const { entities, raw } = await qb.getRawAndEntities();

    return entities.map((reply, index) => {
      const rawData = raw[index] as CommentReactionLike &
        CommentReactionDislike;
      return new CommentDto(
        reply,
        { count: Number(rawData.like_count), me: rawData.my_like },
        { count: Number(rawData.dislike_count), me: rawData.my_dislike },
      );
    });
  }
}
