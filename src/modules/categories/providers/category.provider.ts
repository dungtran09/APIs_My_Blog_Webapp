import { CATEGORY_REPOSITORY } from 'src/core/constants';
import { Category } from '../entities';

export const categoriesProviders = [
  {
    provide: CATEGORY_REPOSITORY,
    useValue: Category,
  },
];
