import { Inject, Injectable } from '@nestjs/common';
import { CATEGORY_REPOSITORY } from 'src/core/constants';
import { Category } from '../entities';
import { CategoryDto } from '../dtos';
import { CategoryNotFoundException } from '../exceptions';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private readonly categoryRepository: typeof Category,
  ) {}

  async createCategory(category: CategoryDto): Promise<Category> {
    return await this.categoryRepository.create<Category>({ ...category });
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.findAll<Category>();
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    const category = await this.categoryRepository.findOne<Category>({
      where: { id: categoryId },
    });

    if (category) {
      return category;
    }
    throw new CategoryNotFoundException(categoryId);
  }

  async removeCategory(categoryId: number) {
    const deleted = await this.categoryRepository.destroy({
      where: { id: categoryId },
    });
    if (deleted === 0) {
      throw new CategoryNotFoundException(categoryId);
    }
    return 'Successfully deleted';
  }

  async updateCategory(categoryId: number, data: any) {
    const [numberOfAffectedRows, updatedCategory] =
      await this.categoryRepository.update(
        { ...data },
        {
          where: {
            id: categoryId,
          },
          returning: true,
        },
      );
    if (numberOfAffectedRows === 0) {
      throw new CategoryNotFoundException(categoryId);
    }
    return updatedCategory;
  }
}
