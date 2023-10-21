import { Module } from '@nestjs/common';
import { PostsController } from './controllers';
import { PostsService } from './services';
import { postsProviders } from './providers';

@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController],
})
export class PostsModule {}
