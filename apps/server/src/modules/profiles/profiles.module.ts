import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { CountriesModule } from '../countries/countries.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity]), CountriesModule],
  controllers: [],
  providers: [ProfilesService],
  exports: [ProfilesService],
})
export class ProfilesModule {}
