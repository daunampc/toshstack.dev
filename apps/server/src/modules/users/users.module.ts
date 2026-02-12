import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { FollowsModule } from '../follows/follows.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), FollowsModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
