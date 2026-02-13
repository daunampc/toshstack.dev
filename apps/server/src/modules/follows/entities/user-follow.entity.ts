import { AbstractEntity } from '@server/common/abstract.entity';
import { UserEntity } from '@server/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserFollowDto } from '../dto/user-follow.dto';
import { UseDto } from '@server/decorators/use-dto.decorator';

@Entity('user_follows')
@UseDto(UserFollowDto)
@Index(['follower_id', 'following_id', 'id'])
export class UserFollowEntity extends AbstractEntity<UserFollowDto> {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  follower_id!: string;

  @Column()
  following_id!: string;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'follower_id' })
  follower!: UserEntity;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'following_id' })
  following!: UserEntity;

  @Column({ default: true })
  is_following!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
