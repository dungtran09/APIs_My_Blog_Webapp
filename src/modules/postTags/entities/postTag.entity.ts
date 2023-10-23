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
import { Tag } from 'src/modules/tags/entities';

@Table({ tableName: 'post_tags' })
class PostTag extends Model<PostTag> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  post_id: number;

  @BelongsTo(() => Post, 'post_id')
  post: Post;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  tag_id: number;

  @BelongsTo(() => Tag, 'tag_id')
  tag: Tag;

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}

export default PostTag;
