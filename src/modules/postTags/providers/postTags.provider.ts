import { POST_TAG_REPOSITORY } from 'src/core/constants';
import PostTag from '../entities/postTag.entity';

export const postTagsProviders = [
  {
    provide: POST_TAG_REPOSITORY,
    useValue: PostTag,
  },
];
