import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

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

  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  parent_id: number;

  @BelongsTo(() => Category, { foreignKey: 'parent_id' })
  parent: Category;

  @HasMany(() => Category, { foreignKey: 'parent_id' })
  child: Category;
}

export default Category;
