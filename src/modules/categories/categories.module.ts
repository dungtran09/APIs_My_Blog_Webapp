import { Module } from '@nestjs/common';
import { CategoriesService } from './services';
import { categoriesProviders } from './providers';
import { CategoriesController } from './categories/categories.controller';

@Module({
  providers: [CategoriesService, ...categoriesProviders],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
