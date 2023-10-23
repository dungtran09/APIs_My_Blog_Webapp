import { POST_CATEGORY_REPOSITORY } from 'src/core/constants';
import { PostCategory } from '../entities';

export const postCategoriesProviders = [
  {
    provide: POST_CATEGORY_REPOSITORY,
    useValue: PostCategory,
  },
];
