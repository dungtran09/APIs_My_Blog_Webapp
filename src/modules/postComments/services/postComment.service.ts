import { Inject, Injectable } from '@nestjs/common';
import { POST_COMMENT_REPOSITORY } from 'src/core/constants';
import PostComment from '../entities/postComent.entity';

@Injectable()
export class PostCommentsService {
  constructor(
    @Inject(POST_COMMENT_REPOSITORY)
    private readonly postCommentRepository: typeof PostComment,
  ) {}
}
