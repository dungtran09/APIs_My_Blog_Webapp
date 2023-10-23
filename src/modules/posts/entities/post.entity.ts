import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from 'src/modules/users/entities';
import { Category } from 'src/modules/categories/entities';
import { Tag } from 'src/modules/tags/entities';
import { PostTag } from 'src/modules/postTags/entities';
import { PostComment } from 'src/modules/postComments/entities';
import { PostCategory } from 'src/modules/postCategories/entities';
import { PostMeta } from 'src/modules/postMetas/entities';

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
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  published: boolean;

  @Default(Date.now())
  @Column({
    type: DataType.DATE,
  })
  published_at: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  author_id: number;

  @BelongsTo(() => User, 'author_id')
  author: User;

  @Column({ type: DataType.ARRAY(DataType.INTEGER) })
  tag_ids: number[];

  @HasMany(() => PostCategory, 'post_id')
  postCategories: PostCategory[];

  @BelongsToMany(() => Category, {
    through: () => PostCategory,
    foreignKey: 'post_id',
    otherKey: 'category_id',
    onDelete: 'CASCADE',
  })
  categories: Category[];

  @HasMany(() => PostComment, 'post_id')
  comments: PostComment[];

  @HasMany(() => PostMeta, 'post_id')
  metas: PostMeta[];

  @HasMany(() => PostTag, 'post_id')
  post_tags: PostTag[];

  @BelongsToMany(() => Tag, {
    through: () => PostTag,
    foreignKey: 'post_id',
    otherKey: 'tag_id',
    onDelete: 'CASCADE',
  })
  tags: Tag[];

  @Default(Date.now())
  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @Default(Date.now())
  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}

export default Post;
