import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Post } from 'src/modules/posts/entities';

@Table
class Topic extends Model<Topic> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Post)
  posts: Post[];
}

export default Topic;
