import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'post_metas' })
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

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  post_id: number;
}

export default PostMeta;
