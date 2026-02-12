import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFollowEntity } from './entities/user-follow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFollowEntity])],
  providers: [FollowsService],
  exports: [FollowsService],
})
export class FollowsModule {}
