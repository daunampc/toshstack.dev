import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from './entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountriesService],
  exports: [CountriesService],
})
export class CountriesModule {}
