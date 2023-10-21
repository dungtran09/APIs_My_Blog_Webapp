import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/modules/users/dtos';
import { TokenPlayload } from '../interfaces';
import { ConfigService } from '@nestjs/config';
import { PostgresErrorCode } from 'src/core/database';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, pass: string) {
    // find if user exits with this email
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    // compare password if user has found.
    const isPasswordMatch = await this.verifyPassword(pass, user.password);
    if (!isPasswordMatch) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async register(registrationData: UserDto) {
    console.log(registrationData);
    const hashedPassword = await this.hashPassword(registrationData.password);
    try {
      const createdUser = await this.userService.createUser({
        ...registrationData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.getUserByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async getCookieWidthJwtToken(userId: number) {
    const token = await this.generatedToken(userId);
    return `Authentication=${token}; HttpOnly; Path=/; Max-age=${this.configService.get(
      'TOKEN_EXPIRATION',
    )}`;
  }

  public getCookieForLogOut() {
    return `Authentication=, HttpOnly: Path=/, Max-age=0`;
  }

  private async generatedToken(userId: number) {
    const payload: TokenPlayload = { userId };
    const token = this.jwtService.sign(payload);
    return token;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
    return true;
  }

  private async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
}
