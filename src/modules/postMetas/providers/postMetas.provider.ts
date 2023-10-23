import { POST_META_REPOSITORY } from 'src/core/constants';
import PostMeta from '../entities/postMeta.entity';

export const postMetasProviders = [
  {
    provide: POST_META_REPOSITORY,
    useValue: PostMeta,
  },
];
