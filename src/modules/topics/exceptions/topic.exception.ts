import { NotFoundException } from '@nestjs/common';

class TopicNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Topic width id: ${postId} not found`);
  }
}

export default TopicNotFoundException;
