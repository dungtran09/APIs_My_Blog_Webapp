import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { usersProviders } from './providers';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
