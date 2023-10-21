import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import Topic from 'src/modules/topics/entities/topic.entity';
import { User } from 'src/modules/users/entities';

@Table
class Post extends Model<Post> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  body: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  createdBy: User;

  @ForeignKey(() => Topic)
  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  topicIds: Topic[];

  @ForeignKey(() => User)
  @Column
  authorId: string;

  @HasMany(() => Topic)
  topics: Topic[];
}

export default Post;
