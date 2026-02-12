import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('premissions')
@Index(['key', 'id'])
@Unique(['key'])
export class PermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  key!: string;
  @Column()
  value!: string;
}
