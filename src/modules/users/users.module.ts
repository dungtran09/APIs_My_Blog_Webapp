import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { usersProviders } from './providers';
import { UsersController } from './controllers';

@Module({
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
