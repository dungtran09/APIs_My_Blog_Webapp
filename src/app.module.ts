import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { APP_FILTER } from '@nestjs/core';
import { PostsModule } from './modules/posts';
import { UsersModule } from './modules/users';
import { DatabaseModule } from './core/database';
import { AuthModule } from './modules/auth';
import { ExceptionsLongerFilter } from './core/utils/exceptions';
import { CategoriesModule } from './modules/categories';
import { TagsModule } from './modules/tags';
import { PostTagsModule } from './modules/postTags';
import { PostMetasModule } from './modules/postMetas';
import { PostCommentsModule } from './modules/postComments';
import { PostCategoriesModule } from './modules/postCategories';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    CategoriesModule,
    TagsModule,
    PostTagsModule,
    PostMetasModule,
    PostCommentsModule,
    PostCategoriesModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        DB_DIALECT: Joi.string().required(),
        PORT: Joi.number(),
        JWT_KEY: Joi.string().required(),
        TOKEN_EXPIRATION: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: ExceptionsLongerFilter }],
})
export class AppModule {}
