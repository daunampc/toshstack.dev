import { Module } from '@nestjs/common';
import { CommunityMembersService } from './community-members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityMemberEntity } from './entities/community-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityMemberEntity])],
  providers: [CommunityMembersService],
})
export class CommunityMembersModule {}
