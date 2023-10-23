import { NotFoundException } from '@nestjs/common';

class TagNotFoundException extends NotFoundException {
  constructor(tagId: number) {
    super(`Tag width id: ${tagId} not found`);
  }
}

export default TagNotFoundException;
