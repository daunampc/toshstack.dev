import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepo: Repository<CountryEntity>,
  ) {}

  async findCountry(code: string): Promise<CountryEntity | null> {
    return await this.countryRepo.findOne({
      where: {
        code,
      },
    });
  }

  async findAll(): Promise<CountryEntity[]> {
    return await this.countryRepo.find({
      order: { name: 'ASC' },
    });
  }
}
