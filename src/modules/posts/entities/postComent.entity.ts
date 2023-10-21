import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'post_comments' })
class PostComment extends Model<PostComment> {
  @Column({
    type: DataType.STRING(75),
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  published: boolean;

  @Column({
    type: DataType.DATE,
  })
  publishedAt: Date;

  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  post_id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  parent_id: number;
}
export default PostComment;
