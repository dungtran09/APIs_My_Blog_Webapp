import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from '../constants';
import { databaseConfig } from './database.config';
import { Post } from 'src/modules/posts/entities';
import { Address, User } from 'src/modules/users/entities';
import { Category } from 'src/modules/categories/entities';
import { Tag } from 'src/modules/tags/entities';
import { PostComment } from 'src/modules/postComments/entities';
import { PostMeta } from 'src/modules/postMetas/entities';
import { PostTag } from 'src/modules/postTags/entities';
import { PostCategory } from 'src/modules/postCategories/entities';
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
        Category,
        PostComment,
        PostMeta,
        PostTag,
        PostCategory,
        Tag,
        Address,
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
