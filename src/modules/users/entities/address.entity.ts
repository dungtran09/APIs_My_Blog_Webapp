import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import User from './user.entity';

@Table({ tableName: 'address' })
class Address extends Model<Address> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  street: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  country: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}

export default Address;
