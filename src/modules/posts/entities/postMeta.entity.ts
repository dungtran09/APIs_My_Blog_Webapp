import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
class PostMeta extends Model<PostMeta> {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  key: string;

  @Column({
    type: DataType.TEXT,
  })
  content: string;
}

export default PostMeta;
