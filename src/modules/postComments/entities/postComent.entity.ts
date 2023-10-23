import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Post } from 'src/modules/posts/entities';

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
  published_at: Date;

  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  post_id: number;

  @BelongsTo(() => Post, 'post_id')
  post: Post;

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}
export default PostComment;
