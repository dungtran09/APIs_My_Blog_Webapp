import { Module } from '@nestjs/common';
import { PostTagsService } from './services';
import { postTagsProviders } from './providers';

@Module({
  providers: [PostTagsService, ...postTagsProviders],
  controllers: [],
})
export class PostTagsModule {}
