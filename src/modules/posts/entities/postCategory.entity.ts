import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'post_topics' })
class PostCategory extends Model<PostCategory> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  post_id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  category_id: number;
}

export default PostCategory;
