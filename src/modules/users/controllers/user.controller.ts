import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from '../services';
import { JwtAuthGuard } from 'src/modules/auth/guards';
import { User } from '../entities';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
}
