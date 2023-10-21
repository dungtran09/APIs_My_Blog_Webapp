import { Inject, Injectable } from '@nestjs/common';
import { POST_REPOSITORY } from 'src/core/constants';
import { Post } from '../entities';
import { PostDto } from '../dtos';
import { PostNotFoundException } from '../exceptions';
import { User } from 'src/modules/users/entities';
import { Topic } from 'src/modules/topics/entities';

@Injectable()
export class PostsService {
  constructor(
    @Inject(POST_REPOSITORY)
    private readonly postRepository: typeof Post,
  ) {}

  async createPost(post: PostDto, userId: number): Promise<Post> {
    return await this.postRepository.create<Post>({ ...post, userId });
  }

  async getAllPosts(): Promise<Post[]> {
    return await this.postRepository.findAll<Post>({
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              'id',
              'email',
              'gender',
              'password',
              'createdAt',
              'updatedAt',
            ],
          },
        },
        {
          model: Topic,
        },
      ],
      attributes: {
        exclude: ['userId'],
      },
    });
  }

  async getPostById(postId: number): Promise<Post> {
    const post = await this.postRepository.findOne<Post>({
      where: { id: postId },
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              'id',
              'email',
              'gender',
              'password',
              'createdAt',
              'updatedAt',
            ],
          },
        },
        {
          model: Topic,
        },
      ],
      attributes: {
        exclude: ['userId'],
      },
    });

    if (post) {
      return post;
    }
    throw new PostNotFoundException(postId);
  }

  // async deletePost(postId: number, userId: number) {
  //   return this.postRepository.destroy({ where: { id: postId, userId } });
  // }

  async updatePost(postId: number, data: object, userId: number) {
    const [numberOfAffectedRows, updatedPost] =
      await this.postRepository.update(
        { ...data },
        {
          where: {
            id: postId,
            userId,
          },
          returning: true,
        },
      );
    if (numberOfAffectedRows === 0) {
      throw new PostNotFoundException(postId);
    }
    return updatedPost;
  }
}
