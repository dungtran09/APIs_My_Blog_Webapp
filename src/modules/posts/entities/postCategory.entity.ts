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
import { Category } from 'src/modules/categories/entities';
import Post from './post.entity';

@Table({ tableName: 'post_categories' })
class PostCategory extends Model<PostCategory> {
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

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  category_id: number;

  @BelongsTo(() => Category, 'category_id')
  category: Category;

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}

export default PostCategory;
