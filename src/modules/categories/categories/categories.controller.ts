import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from '../services';
import { Category as CategoryEntity } from '../entities';
import { CategoryDto } from '../dtos';
import { JwtAuthGuard } from 'src/modules/auth/guards';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  async getAllCategoris() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getCategoryById(@Param('id') id: number): Promise<CategoryEntity> {
    return this.categoryService.getCategoryById(id);
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async createCategory(@Body() category: CategoryDto): Promise<CategoryEntity> {
    return await this.categoryService.createCategory(category);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateCategory(
    @Param('id') id: number,
    @Body() category: CategoryDto,
  ): Promise<CategoryEntity[]> {
    return await this.categoryService.updateCategory(id, category);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeCategory(@Param('id') id: number) {
    return await this.categoryService.removeCategory(id);
  }
}
