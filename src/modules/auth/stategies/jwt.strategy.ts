import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { Request } from 'express';
import { UsersService } from 'src/modules/users/services';
import { User } from 'src/modules/users/entities';
import { TokenPlayload } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      // Extract the JSON web token from the request cookies if it exists
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          // console.log(request.cookies);
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_KEY'),
    });
  }

  async validate(payload: TokenPlayload): Promise<User> {
    // Because the payload contains the email and username, we could also use
    // those credentials to get a use from the database
    return this.userService.getUserById(payload.userId);
  }
}
