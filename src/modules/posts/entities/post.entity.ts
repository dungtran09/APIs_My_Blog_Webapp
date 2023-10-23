import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from 'src/modules/users/entities';
import PostCategory from './postCategory.entity';
import { Category } from 'src/modules/categories/entities';
import PostComment from './postComent.entity';
import PostMeta from './postMeta.entity';
import PostTag from './postTag.entity';
import { Tag } from 'src/modules/tags/tag.entities';

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

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  author_id: number;

  @BelongsTo(() => User, 'author_id')
  author: User;

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
  postTags: PostTag[];

  @BelongsToMany(() => Tag, {
    through: () => PostTag,
    foreignKey: 'post_id',
    otherKey: 'tag_id',
    onDelete: 'CASCADE',
  })
  tags: Tag[];

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;
}

export default Post;
