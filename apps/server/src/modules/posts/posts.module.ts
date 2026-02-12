import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CommunitiesModule } from '../communities/communities.module';
import { PostTaxonomyEntity } from './entities/post-taxonomy.entity';
import { TaxonomyModule } from '../taxonomy/taxonomy.module';
import { UsersModule } from '../users/users.module';
import { PostReactionsModule } from '../post-reactions/post-reactions.module';

@Module({
  imports: [
    CommunitiesModule,
    TaxonomyModule,
    UsersModule,
    PostReactionsModule,
    TypeOrmModule.forFeature([PostEntity, PostTaxonomyEntity]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  ],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
