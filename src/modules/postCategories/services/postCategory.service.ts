import { Inject, Injectable } from '@nestjs/common';
import { POST_CATEGORY_REPOSITORY } from 'src/core/constants';
import { PostCategory } from '../entities';

@Injectable()
export class PostCategoriesService {
  constructor(
    @Inject(POST_CATEGORY_REPOSITORY)
    private readonly postCategoryRepository: typeof PostCategory,
  ) {}

  async getAllPostCategories(): Promise<PostCategory[]> {
    return await this.postCategoryRepository.findAll<PostCategory>();
  }
}
