import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'post_tags' })
class PostTag extends Model<PostTag> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  post_id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  tag_id: number;
}

export default PostTag;
