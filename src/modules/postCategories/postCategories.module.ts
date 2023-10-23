import { Module } from '@nestjs/common';
import { postCategoriesProviders } from './providers';
import { PostCategoriesService } from './services';

@Module({
  providers: [PostCategoriesService, ...postCategoriesProviders],
  controllers: [],
})
export class PostCategoriesModule {}
