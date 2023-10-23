import { Inject, Injectable } from '@nestjs/common';
import { POST_META_REPOSITORY } from 'src/core/constants';
import PostMeta from '../entities/postMeta.entity';

@Injectable()
export class PostMetasService {
  constructor(
    @Inject(POST_META_REPOSITORY)
    private readonly postMetaRepository: typeof PostMeta,
  ) {}

  async getAllPostMetas(): Promise<PostMeta[]> {
    return await this.postMetaRepository.findAll<PostMeta>();
  }
}
