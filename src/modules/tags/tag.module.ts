import { Module } from '@nestjs/common';
import { TagsService } from './services/tag.service';
import { tagProviders } from './providers';
import { TagController } from './controllers';

@Module({
  providers: [TagsService, ...tagProviders],
  controllers: [TagController],
})
export class TagModule {}
