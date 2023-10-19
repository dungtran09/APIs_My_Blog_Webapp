import { USER_REPOSITORY } from 'src/core/constants';
import { User } from '../entities';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
