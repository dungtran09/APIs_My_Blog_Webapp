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
import PostTag from 'src/modules/postTags/entities/postTag.entity';
import { Post } from 'src/modules/posts/entities';

@Table({ tableName: 'tags' })
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  name: string;

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
