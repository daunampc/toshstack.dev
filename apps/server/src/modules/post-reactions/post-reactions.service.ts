import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostReactionEntity } from './entities/post-reaction.entity';
import { Repository } from 'typeorm';
import { CreatePostReactionDto } from '../posts/dto/create-post-reaction.dto';
import { SnowFlakeService } from '@/shareds/services/snowflake.service';

@Injectable()
export class PostReactionsService {
  constructor(
    @InjectRepository(PostReactionEntity)
    private readonly postReactionRepo: Repository<PostReactionEntity>,
    private readonly snowFlakeService: SnowFlakeService,
  ) {}

  async upsertPostReaction(
    dto: CreatePostReactionDto,
    user_id: string,
    post_id: string,
  ) {
    const isExisting = await this.postReactionRepo.findOne({
      where: {
        post_id: this.snowFlakeService.fromBase36(post_id),
        user_id: user_id,
      },
    });
    if (isExisting && isExisting.reaction === dto.reaction) {
      return await this.postReactionRepo.remove(isExisting);
    }
    const isUpsert = await this.postReactionRepo.upsert(
      {
        ...dto,
        post_id: this.snowFlakeService.fromBase36(post_id),
        user_id,
      },
      {
        conflictPaths: ['post_id', 'user_id'],
      },
    );
    return isUpsert;
  }
}
