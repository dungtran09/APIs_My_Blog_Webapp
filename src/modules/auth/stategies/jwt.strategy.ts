import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { UsersService } from 'src/modules/users/services';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      scretOrKey: process.env.JWTKEY,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.getUserById(payload.id);
    if (!user) {
      throw new UnauthorizedException(
        'You are not authorized to perfom the operation',
      );
    }
    return payload;
  }
}
