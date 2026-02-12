import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PostEntity } from './post.entity';
import { TaxonomyEntity } from '@/modules/taxonomy/entities/taxonomy.entity';

@Entity('post_taxonomies')
@Unique(['post'])
export class PostTaxonomyEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => PostEntity, (p) => p.post_taxonomy, {
    onDelete: 'CASCADE',
  })
  post!: PostEntity;

  @ManyToOne(() => TaxonomyEntity)
  taxonomy!: TaxonomyEntity;

  @Column({ default: 0 })
  order!: number;
}
