import { NotFoundException } from '@nestjs/common';

class UserNotFoundException extends NotFoundException {
  constructor(userId: number) {
    super(`User width id: ${userId} not found`);
  }
}

export default UserNotFoundException;
