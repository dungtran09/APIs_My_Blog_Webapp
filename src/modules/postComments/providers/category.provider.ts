import { POST_COMMENT_REPOSITORY } from 'src/core/constants';
import PostComment from '../entities/postComent.entity';

export const postCommentsProviders = [
  {
    provide: POST_COMMENT_REPOSITORY,
    useValue: PostComment,
  },
];
