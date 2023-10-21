import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  metaTitle: string;

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
}
