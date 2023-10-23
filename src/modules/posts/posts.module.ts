import { Module } from '@nestjs/common';
import { PostsController } from './controllers';
import { PostsService } from './services';
import { postsProviders } from './providers';
import { postTagsProviders } from '../postTags/providers';

@Module({
  providers: [PostsService, ...postsProviders, ...postTagsProviders],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
