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

@Table
class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;

  @ForeignKey(() => Address)
  @Column({ type: DataType.VIRTUAL })
  address: Address;

  @HasMany(() => Post)
  posts: Post[];
}

export default User;
