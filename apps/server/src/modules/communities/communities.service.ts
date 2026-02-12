import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommunityEntity } from './entities/community.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommunitiesService {
  constructor(
    @InjectRepository(CommunityEntity)
    private readonly communityRepo: Repository<CommunityEntity>,
  ) {}

  async findById(community_id: string): Promise<CommunityEntity | null> {
    const result = await this.communityRepo.findOne({
      where: {
        id: community_id,
      },
    });
    if (!result) return null;
    return result;
  }
}
