import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Post } from 'src/modules/posts/entities';

@Table
class Topic extends Model<Topic> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING(100),
  })
  metaTitle: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @ForeignKey(() => Post)
  @Column
  postId: number;
}

export default Topic;
