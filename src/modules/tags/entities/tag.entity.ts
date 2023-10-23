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
import { Post, PostTag } from 'src/modules/posts/entities';

@Table({ tableName: 'tags' })
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.STRING(75),
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

  @HasMany(() => PostTag, 'tag_id')
  postTags: PostTag[];

  @BelongsToMany(() => Post, {
    through: () => PostTag,
    foreignKey: 'tag_id',
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
