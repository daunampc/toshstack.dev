import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { DataSource, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UploadService } from '../upload/upload.service';
import { CommunityEntity } from '../communities/entities/community.entity';
import { SnowFlakeService } from '@/shareds/services/snowflake.service';
import { ApiConfigService } from '@/shareds/services/api-config.service';
import { TaxonomyEntity } from '../taxonomy/entities/taxonomy.entity';
import { PostTaxonomyEntity } from './entities/post-taxonomy.entity';
import {
  BadRequestAppException,
  NotFoundAppException,
} from '@/exceptions/http.exception';
import { createSlug } from '@/common/slugify.util';
import { generateRandomId } from '@/common/utils';
import { GetPostDto } from './dto/get-post.dto';
import { PostDto } from './dto/post.dto';
import { UsersService } from '../users/users.service';
import { RedisService } from '../redis';
import { UserEntity } from '../users/entities/user.entity';
import { PostRaw } from './types/get-post.types';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
    private readonly usersService: UsersService,
    private readonly uploadService: UploadService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly snowFlakeService: SnowFlakeService,
    private readonly configService: ApiConfigService,
    private readonly redisService: RedisService,
  ) {}

  async getPosts(postPageOptionsDto: GetPostDto, user_id?: string) {
    const qb = this.postRepo.createQueryBuilder('post');

    qb.leftJoinAndSelect('post.author', 'author')
      .leftJoinAndSelect('author.profile', 'profile')
      // check user follow author
      .leftJoin(
        'user_follows',
        'uf',
        'uf.following_id = author.id AND uf.follower_id = :user_id',
        { user_id },
      )
      // count all followers
      .leftJoin('user_follows', 'uf_all', 'uf_all.following_id = author.id')
      // select extra fields
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM user_follows uf
        WHERE uf.following_id = author.id
          AND uf.follower_id = :user_id
      )
      `,
        'my_follower',
      )
      .addSelect('COUNT(uf_all.follower_id)', 'follower_count')

      .groupBy('post.id')
      .addGroupBy('author.id')
      .addGroupBy('profile.id')
      .setParameter('user_id', user_id);

    const { entities, meta } =
      await qb.pagination<PostEntity>(postPageOptionsDto);
    // const data = entities.map((post, index) => {
    //   const rawData = raw[index] as FollowCount;
    //   return new PostDto(post);
    // });

    const { user, user_follow } = await this.usersService.getMeUser({
      id: user_id ?? '',
    });
    return {
      data: entities.toDtos<PostDto>({
        snowFlakeService: this.snowFlakeService,
        author: user.toDto({ user_follow: user_follow }),
      }),
      meta,
    };
  }
  async getUserPosts(
    postPageOptionsDto: GetPostDto,
    userPost: UserEntity | null,
    userView: UserEntity | null,
  ) {
    if (!userPost)
      throw new NotFoundAppException('USER_NOT_FOUND', 'User not found');
    const qb = this.postRepo.createQueryBuilder('post');

    qb.leftJoinAndSelect('post.author', 'author')
      .leftJoinAndSelect('author.profile', 'profile')
      // check user follow author
      .leftJoin(
        'user_follows',
        'uf',
        'uf.following_id = author.id AND uf.follower_id = :user_id',
        { user_id: userView?.id },
      )
      // count all followers
      .leftJoin('user_follows', 'uf_all', 'uf_all.following_id = author.id')
      // select extra fields
      .addSelect(
        `
      EXISTS (
        SELECT 1
        FROM user_follows uf
        WHERE uf.following_id = author.id
          AND uf.follower_id = :user_id
      )
      `,
        'my_follower',
      )
      .addSelect(
        `(
    SELECT COUNT(*)
    FROM post_reactions r
    WHERE r.post_id = post.id
      AND r.reaction = 'LIKE'
  )::int`,
        'like_count',
      )
      .addSelect(
        `(
    SELECT COUNT(*)
    FROM post_reactions r
    WHERE r.post_id = post.id
      AND r.reaction = 'DISLIKE'
  )::int`,
        'dislike_count',
      )
      .addSelect(
        `COALESCE(
    (SELECT true FROM post_reactions r
     WHERE r.post_id = post.id
       AND r.user_id = :user_id
       AND r.reaction = 'LIKE'
     LIMIT 1),
    false
  )`,
        'is_liked_by_me',
      )
      .addSelect(
        `COALESCE(
    (SELECT true FROM post_reactions r
     WHERE r.post_id = post.id
       AND r.user_id = :user_id
       AND r.reaction = 'DISLIKE'
     LIMIT 1),
    false
  )`,
        'is_disliked_by_me',
      )
      .addSelect('COUNT(uf_all.follower_id)', 'follower_count')

      .groupBy('post.id')
      .addGroupBy('author.id')
      .addGroupBy('profile.id')
      .setParameter('user_id', userView?.id);

    const { entities, raw, meta } = await qb.pagination<PostEntity & PostRaw>(
      postPageOptionsDto,
    );
    const data = entities.map((post, index) => {
      const row = raw[index] as PostRaw;

      return new PostDto(post, {
        snowFlakeService: this.snowFlakeService,
        author: post.author.toDto(),
        like: {
          count: Number(row.like_count),
          me: row.is_liked_by_me,
        },
        dislike: {
          count: Number(row.dislike_count),
          me: row.is_disliked_by_me,
        },
      });
    });
    return {
      data,
      meta,
    };
  }
  async findbySlug(slug: string, user_id?: string): Promise<PostDto> {
    const { raw, entities } = await this.postRepo
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .leftJoin('post.comments', 'comments')
      .where('post.slug = :slug', { slug })
      .addSelect('COUNT(comments.id)', 'comment_count')
      .groupBy('post.id')
      .addGroupBy('author.id')
      .setParameter('user_id', user_id)
      .getRawAndEntities<{ comment_count: number }>();
    const post = entities[0];

    if (!post)
      throw new NotFoundAppException('POST_NOT_FOUND', 'Post not found');
    const { user, user_follow } = await this.usersService.getMeUser({
      id: post.author.id,
    });
    const comment_count = Number(raw[0]?.comment_count ?? 0);

    return post.toDto({
      snowFlakeService: this.snowFlakeService,
      author: user.toDto({ user_follow: user_follow }),
      comment_count: comment_count,
    });
  }

  /**
   *
   * @param dto
   * @param user_id
   * @param file
   * @returns {Promise<boolean>}
   */
  async createPost(
    dto: CreatePostDto,
    user_id: string,
    file?: Express.Multer.File | null,
  ): Promise<boolean> {
    await this.dataSource.transaction(async (manager) => {
      //NOTE: Check taxonomy existing by id
      let community: CommunityEntity | null = null;
      const taxonomy = await manager.findOne(TaxonomyEntity, {
        where: {
          id: dto.category,
        },
      });
      if (!taxonomy)
        throw new BadRequestAppException(
          'CATEGORY_WORKING',
          'Category not found',
        );

      //NOTE: Check slug existing post
      let slugPost = createSlug(dto.title);
      const existingSlug = await manager.findOne(PostEntity, {
        where: {
          slug: slugPost,
        },
      });
      if (existingSlug) {
        slugPost = `${slugPost}-${generateRandomId(6)}`;
      }

      let image_path = null;
      if (file) {
        image_path = await this.uploadService.uploadImage(file);
      }

      if (dto.community)
        community = await manager.findOne(CommunityEntity, {
          where: {
            id: dto.community,
          },
        });

      const image_url = `${this.configService.serverConfig.app_url}${image_path}`;
      const post_id = this.snowFlakeService.generate();
      const post = manager.create(PostEntity, {
        id: post_id,
        title: dto.title,
        description: dto.description,
        slug: slugPost,
        content: dto.content,
        banner_image: image_url,
        community,

        author: {
          id: user_id,
        },
      });
      await manager.save(post);
      const post_category = manager.create(PostTaxonomyEntity, {
        post,
        taxonomy,
        order: 0,
      });
      await manager.save(post_category);
    });
    return true;
  }
}
