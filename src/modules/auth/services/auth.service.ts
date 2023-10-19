import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/modules/users/dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    // find if user exits with this email
    const user = await this.userService.getUserByEmail(username);
    if (!user) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    // compare password if user has found.
    const isPasswordMatch = await this.comparePassword(pass, user.password);
    if (!isPasswordMatch) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user: any) {
    const token = await this.generatedToken(user);
    return { user, token };
  }

  public async register(user: UserDto) {
    // hash password
    const hashedPassword = await this.hashPassword(user.password);

    // create new user
    const newUser = await this.userService.createUser({
      ...user,
      password: hashedPassword,
    });

    const { password, ...result } = newUser['dataValues'];

    // geneate token
    const token = await this.generatedToken(result);

    // return the user and token
    return { user: result, token };
  }

  private async generatedToken(user: any) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async comparePassword(enteredPassword: string, dbPassword: string) {
    const isMatch = await bcrypt.compare(enteredPassword, dbPassword);
    return isMatch;
  }

  private async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
}
