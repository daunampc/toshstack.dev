import { Module } from '@nestjs/common';
import { TaxonomyService } from './taxonomy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxonomyEntity } from './entities/taxonomy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxonomyEntity])],
  providers: [TaxonomyService],
  exports: [TaxonomyService],
})
export class TaxonomyModule {}
