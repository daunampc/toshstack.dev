import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFollowEntity } from './entities/user-follow.entity';
import { Repository } from 'typeorm';
import { FollowData } from '../users/types/user.types';

@Injectable()
export class FollowsService {
  constructor(
    @InjectRepository(UserFollowEntity)
    private readonly userFollowRepo: Repository<UserFollowEntity>,
  ) {}

  async followerStats(
    targetUserId: string,
    meId?: string,
  ): Promise<FollowData> {
    const qb = this.userFollowRepo
      .createQueryBuilder('uf')
      .select([
        'COUNT(CASE WHEN uf.is_following = true THEN 1 END) AS count',
        meId
          ? `SUM(
            CASE 
              WHEN uf.follower_id = :meId
               AND uf.following_id = :follower_id
               AND uf.is_following = true 
              THEN 1 ELSE 0 
            END
          ) AS me`
          : '0 AS me',
      ])
      .where('uf.following_id = :follower_id', { follower_id: targetUserId });
    if (meId) {
      qb.setParameter('meId', meId);
    }
    const raw = await qb.getRawOne<FollowData>();

    return {
      count: Number(raw?.count),
      me: Number(raw?.me) > 0,
    };
  }
  async followingCount(following_id: string): Promise<number> {
    return await this.userFollowRepo.count({
      where: {
        following_id,
        is_following: true,
      },
    });
  }

  async followStatByUser(targetUserId: string, user_id?: string) {
    const [followerStats, followingCount] = await Promise.all([
      this.followerStats(targetUserId, user_id),
      this.followingCount(targetUserId),
    ]);
    return {
      follower_stats: followerStats,
      followingCount,
    };
  }
}
