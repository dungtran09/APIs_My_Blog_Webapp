import { Module } from '@nestjs/common';
import { PostMetasService } from './services';
import { postMetasProviders } from './providers';

@Module({
  providers: [PostMetasService, ...postMetasProviders],
  controllers: [],
})
export class PostMetasModule {}
