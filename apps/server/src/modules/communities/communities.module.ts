import { Module } from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityEntity } from './entities/community.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityEntity])],
  providers: [CommunitiesService],
  exports: [CommunitiesService],
})
export class CommunitiesModule {}
