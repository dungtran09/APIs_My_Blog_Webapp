import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.register(user);
  }
}
