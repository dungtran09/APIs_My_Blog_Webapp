import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from '../constants';
import { databaseConfig } from './database.config';
import { Address, User } from 'src/modules/users/entities';
import {
  Post,
  PostComment,
  PostMeta,
  PostTag,
  PostTopic,
} from 'src/modules/posts/entities';
import Topic from 'src/modules/topics/entities/topic.entity';
import { Tag } from 'src/modules/tags/tag.entities';
export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: any;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
        default:
          config = databaseConfig.development;
          break;
      }

      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Post,
        Topic,
        Address,
        PostComment,
        PostMeta,
        PostTag,
        PostTopic,
        Tag,
      ]);
      await sequelize.sync();
      sequelize
        .authenticate()
        .then(() => {
          console.log('Connection DB has been established.');
          console.log('==================================');
        })
        .catch((err) => {
          console.log('Unable to connect to the database:', err);
        });

      return sequelize;
    },
  },
];
