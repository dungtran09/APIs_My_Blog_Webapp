import {
  Column,
  CreatedAt,
  DataType,
  Default,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Exclude } from 'class-transformer';
import { Post } from 'src/modules/posts/entities';

@Table({ tableName: 'users' })
class User extends Model<User> {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  middle_name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING(15),
    unique: true,
    allowNull: true,
  })
  mobile: string;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  last_login: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  intro: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  profile: string;

  @Exclude()
  @Column({
    type: DataType.STRING(225),
    allowNull: false,
  })
  password: string;

  @Default(Date.now())
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  registered_at: Date;

  @Column({
    type: DataType.STRING,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;

  @HasMany(() => Post, 'author_id')
  posts: Post[];

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}

export default User;
