import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from '../entities';
import { UserDto } from '../dtos';
import UserNotFoundException from '../exceptions/user.exception';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export default class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
  ) {}

  async createUser(userData: UserDto): Promise<User> {
    return this.userRepository.create<User>(userData);
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne<User>({ where: { id } });

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
    throw new HttpException(
      `User width ${email} not found`,
      HttpStatus.NOT_FOUND,
    );
  }
}
