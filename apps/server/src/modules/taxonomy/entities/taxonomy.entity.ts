import { AbstractEntity } from '@server/common/abstract.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { TaxonomyType } from '../enums/taxonomy-type.enum';
import { TaxonomyScope } from '../enums/taxonomy-scope.enum';
import { CommunityEntity } from '@server/modules/communities/entities/community.entity';

@Entity('taxonomies')
@Index(['id'])
@Unique(['slug', 'name'])
export class TaxonomyEntity extends AbstractEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({ type: 'text', nullable: true })
  image!: string | null;

  @Column({ type: 'enum', enum: TaxonomyType })
  type!: TaxonomyType;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100 })
  slug!: string;

  @Column({ type: 'uuid', nullable: true })
  parent_id!: string | null;

  @ManyToOne(() => TaxonomyEntity, (t) => t.children, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_id' })
  parent!: TaxonomyEntity | null;

  @OneToMany(() => TaxonomyEntity, (t) => t.parent)
  children!: TaxonomyEntity[];

  @Column({ type: 'enum', enum: TaxonomyScope })
  scope!: TaxonomyScope;

  @ManyToOne(() => CommunityEntity, (community) => community.taxonomies, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community!: CommunityEntity | null;
}
