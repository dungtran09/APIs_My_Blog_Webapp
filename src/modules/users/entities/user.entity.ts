import { Column, DataType, Default, Model, Table } from 'sequelize-typescript';
import { Exclude } from 'class-transformer';

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
  middle_name: string | null;

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
  mobile: string | null;

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
  last_login: Date | null;

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

  // @ForeignKey(() => Address)
  // @Column({ type: DataType.VIRTUAL })
  // address: Address;
  //
  // @HasMany(() => Post, 'authorId')
  // posts: Post[];
}

export default User;
