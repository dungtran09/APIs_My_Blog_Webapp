import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
class PostTag extends Model<PostTag> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;
}

export default PostTag;
