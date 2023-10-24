import { Module } from '@nestjs/common';
import { PostsController } from './controllers';
import { PostsService } from './services';
import { postsProviders } from './providers';
import { postTagsProviders } from '../postTags/providers';
import { PostTagsModule } from '../postTags';
import { postCategoriesProviders } from '../postCategories/providers';

@Module({
  providers: [
    PostsService,
    ...postsProviders,
    ...postTagsProviders,
    ...postCategoriesProviders,
  ],
  controllers: [PostsController],
  exports: [PostsService],
  imports: [PostTagsModule],
})
export class PostsModule {}
