import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities';
import { UserDto } from '../dtos';
import UserNotFoundException from '../exceptions/user.exception';
import { USER_REPOSITORY } from 'src/core/constants';
// import { Post } from 'src/modules/posts/entities';

@Injectable()
export default class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
  ) {}

  async createUser(userData: UserDto): Promise<User> {
    const newUser = await this.userRepository.create<User>(userData);
    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll<User>({
      attributes: {
        exclude: ['password'],
      },
      // include: {
      //   model: Post,
      // },
    });
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne<User>({
      where: { id },
      attributes: {
        exclude: ['password'],
      },
    });
    if (user) {
      return user;
    }
    throw new UserNotFoundException(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne<User>({ where: { email } });
    if (user) {
      return user;
    }
    return null;
  }
}
