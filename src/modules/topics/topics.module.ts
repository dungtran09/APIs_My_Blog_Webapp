import { Module } from '@nestjs/common';
import { topicsProviders } from './providers';
import { TopicsService } from './services';
import { TopicsController } from './controllers';

@Module({
  providers: [TopicsService, ...topicsProviders],
  controllers: [TopicsController],
})
export class TopicsModule {}
