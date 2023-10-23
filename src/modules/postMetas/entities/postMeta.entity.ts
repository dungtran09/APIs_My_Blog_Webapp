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

export default PostMeta;
