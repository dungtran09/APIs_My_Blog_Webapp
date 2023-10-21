import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
class PostTopic extends Model<PostTopic> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;
}

export default PostTopic;
