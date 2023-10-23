import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { PostCategory } from 'src/modules/postCategories/entities';
import { Post } from 'src/modules/posts/entities';

@Table({ tableName: 'categories' })
class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING(100),
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
  })
  content: string;

  @HasMany(() => PostCategory, 'category_id')
  postCategories: PostCategory[];

  @BelongsToMany(() => Post, {
    through: () => PostCategory,
    foreignKey: 'category_id',
    otherKey: 'post_id',
    onDelete: 'CASCADE',
  })
  posts: Post[];

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}

export default Category;
