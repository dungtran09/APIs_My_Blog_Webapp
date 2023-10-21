import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services';
import { UserDto } from 'src/modules/users/dtos';
import { DoesUserExist } from 'src/core/guards';
import { ReqWidthUser, ResWidthUser } from '../interfaces';
import * as fs from 'fs';
import { JwtAuthGuard, LocalAuthGuard } from '../guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async logIn(@Request() req: ReqWidthUser) {
    const user = req.user;
    const cookies = await this.authService.getCookieWidthJwtToken(user.id);

    // save Cookie in to file COOKIE.txt (USING in test_api folder)
    try {
      fs.writeFileSync(
        `${__dirname}/../../../../test_apis/config/COOKIE.txt`,
        cookies,
      );
      console.log(`Write Reset Cookie Successfully!`);
    } catch (error) {
      console.log(error);
    }
    req.res.setHeader('Set-Cookie', cookies);
    return user;
  }

  @Post('sign-up')
  @UseGuards(DoesUserExist)
  async signUp(@Body() user: UserDto) {
    return await this.authService.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('log-out')
  @HttpCode(200)
  async logOut(@Response() res: ResWidthUser): Promise<void> {
    res.setHeader('Set-cookie', this.authService.getCookieForLogOut());
    res.clearCookie('Authentication');
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Request() req: ReqWidthUser) {
    const user = req.user;
    user.password = undefined;
    return user;
  }
}
