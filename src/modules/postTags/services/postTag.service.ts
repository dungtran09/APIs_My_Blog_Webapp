import { Inject, Injectable } from '@nestjs/common';
import { POST_TAG_REPOSITORY } from 'src/core/constants';
import PostTag from '../entities/postTag.entity';
import { Post } from 'src/modules/posts/entities';
import { Tag } from 'src/modules/tags/entities';

@Injectable()
export class PostTagsService {
  constructor(
    @Inject(POST_TAG_REPOSITORY)
    private readonly postTagRepository: typeof PostTag,
  ) {}

  async getAllPostTags(): Promise<PostTag[]> {
    return await this.postTagRepository.findAll<PostTag>({
      include: [
        {
          model: Post,
        },
        {
          model: Tag,
        },
      ],
    });
  }
}
