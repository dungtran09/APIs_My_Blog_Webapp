import { TOPIC_REPOSITORY } from 'src/core/constants';
import { Topic } from '../entities';

export const topicsProviders = [
  {
    provide: TOPIC_REPOSITORY,
    useValue: Topic,
  },
];
