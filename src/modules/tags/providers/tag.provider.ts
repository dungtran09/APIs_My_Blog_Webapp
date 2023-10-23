import { TAG_REPOSITORY } from 'src/core/constants';
import { Tag } from '../entities';

export const tagProviders = [
  {
    provide: TAG_REPOSITORY,
    useValue: Tag,
  },
];
