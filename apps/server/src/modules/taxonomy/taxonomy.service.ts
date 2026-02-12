import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxonomyEntity } from './entities/taxonomy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxonomyService {
  constructor(
    @InjectRepository(TaxonomyEntity)
    private readonly taxonomyRepo: Repository<TaxonomyEntity>,
  ) {}

  async findTaxonomy(id: string): Promise<TaxonomyEntity | null> {
    const taxonomy = await this.taxonomyRepo.findOne({
      where: {
        id,
      },
    });
    if (!taxonomy) return null;
    return taxonomy;
  }
}
