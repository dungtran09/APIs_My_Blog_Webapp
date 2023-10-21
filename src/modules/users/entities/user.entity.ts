import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import Address from './address.entity';
import { Post } from 'src/modules/posts/entities';
import { Exclude } from 'class-transformer';

@Table
class User extends Model<User> {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  middleName: string | null;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING(15),
    unique: true,
    allowNull: true,
  })
  mobile: string | null;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  registeredAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  lastLogin: Date | null;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  intro: string | null;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  profile: string | null;

  @Exclude()
  @Column({
    type: DataType.STRING(32),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;

  // @ForeignKey(() => Address)
  // @Column({ type: DataType.VIRTUAL })
  // address: Address;
  //
  // @HasMany(() => Post, 'authorId')
  // posts: Post[];
}

export default User;
