import { Module } from '@nestjs/common';
import { PostCommentsService } from './services';
import { postCommentsProviders } from './providers';

@Module({
  providers: [PostCommentsService, ...postCommentsProviders],
  controllers: [],
})
export class PostCommentsModule {}
