import { AbstractEntity } from '@/common/abstract.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileGender } from '../enums/profile-gender.enum';
import { ProfileDto } from '../dto/profile.dto';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { CountryEntity } from '@/modules/countries/entities/country.entity';
import { UseDto } from '@/decorators/use-dto.decorator';

@Entity('profiles')
@UseDto(ProfileDto)
@Index(['id'])
@Unique(['phone'])
export class ProfileEntity extends AbstractEntity<ProfileDto> {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    default:
      'https://res.cloudinary.com/dijimofgu/image/upload/v1765507469/Hinh-anh-avatar-chibi-gau-truc-5_pm7p5f.jpg',
  })
  avatar_url!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  display_name!: string;

  @Column({ type: 'enum', enum: ProfileGender, nullable: true })
  gender!: ProfileGender | null;

  @Column({ nullable: true, type: 'text' })
  about_me!: string | null;

  @Column({ type: 'text', nullable: true })
  banner_url!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  heading!: string | null;

  // @Column({ type: 'text', nullable: true })
  // description!: string | null;

  @Column({ type: 'boolean', default: false })
  mature!: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone!: string | null;

  @Column({ type: 'text', nullable: true })
  address!: string | null;

  @ManyToOne(() => CountryEntity, { nullable: true })
  @JoinColumn({ name: 'country_id' })
  country!: CountryEntity | null;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => UserEntity, (user) => user.profile, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;
}
