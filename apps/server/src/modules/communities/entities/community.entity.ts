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
import { CommunityType } from '../enums/community-type.enum';
import { TaxonomyEntity } from '@server/modules/taxonomy/entities/taxonomy.entity';
import { UserEntity } from '@server/modules/users/entities/user.entity';

@Entity('communities')
@Index(['id'])
@Unique(['name', 'handle'])
export class CommunityEntity extends AbstractEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({ type: 'text', nullable: true })
  logo!: string | null;

  @Column({ type: 'text', nullable: true })
  banner_image!: string | null;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 155 })
  handle!: string;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  description!: string | null;

  @Column({ type: 'enum', enum: CommunityType, default: 'public' })
  type!: 'public' | 'restricted' | 'private';

  @ManyToOne(() => UserEntity, { eager: false })
  @JoinColumn({ name: 'created_by' })
  user!: UserEntity;

  @OneToMany(() => TaxonomyEntity, (taxonomy) => taxonomy.community)
  taxonomies!: TaxonomyEntity[];
}
