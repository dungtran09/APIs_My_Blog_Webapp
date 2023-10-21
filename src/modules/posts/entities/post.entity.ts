import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'posts' })
class Post extends Model<Post> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  meta_title: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  sumary: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  published: boolean;

  @Column({
    type: DataType.DATE,
  })
  published_at: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  author_id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  parent_id: number;
}

export default Post;
