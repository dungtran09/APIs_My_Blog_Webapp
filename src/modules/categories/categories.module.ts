import { Module } from '@nestjs/common';
import { CategoriesService } from './services';
import { categoriesProviders } from './providers';
import { CategoriesController } from './controllers';

@Module({
  providers: [CategoriesService, ...categoriesProviders],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
