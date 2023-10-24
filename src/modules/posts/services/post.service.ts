import { Inject, Injectable } from '@nestjs/common';
import {
  POST_CATEGORY_REPOSITORY,
  POST_REPOSITORY,
  POST_TAG_REPOSITORY,
} from 'src/core/constants';
import { Post } from '../entities';
import { PostDto } from '../dtos';
import { PostNotFoundException } from '../exceptions';
import { User } from 'src/modules/users/entities';
import { PostTag } from 'src/modules/postTags/entities';
import { Tag } from 'src/modules/tags/entities';
import { Category } from 'src/modules/categories/entities';
import { PostCategory } from 'src/modules/postCategories/entities';

@Injectable()
export class PostsService {
  constructor(
    @Inject(POST_REPOSITORY)
    private readonly postRepository: typeof Post,
    @Inject(POST_TAG_REPOSITORY)
    private readonly postTagRepository: typeof PostTag,
    @Inject(POST_CATEGORY_REPOSITORY)
    private readonly postCategory: typeof PostCategory,
  ) {}

  async createPost(post: PostDto, author_id: number): Promise<Post> {
    const newPost = await this.postRepository.create<Post>({
      ...post,
      author_id,
    });

    if (newPost && post.tag_ids !== null) {
      await this.createPostTags(newPost.id, post.tag_ids);
    }

    if (newPost && post.categories_ids !== null) {
      await this.createPostCategories(newPost.id, post.categories_ids);
    }
    return newPost;
  }

  async getAllPosts(): Promise<Post[]> {
    return await this.postRepository.findAll<Post>({
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              'id',
              'mobile',
              'email',
              'last_login',
              'intro',
              'profile',
              'registered_at',
              'gender',
              'created_at',
              'updated_at',
              'password',
            ],
          },
        },
        {
          model: Tag,
          attributes: {
            exclude: ['created_at', 'updated_at', 'PostTag'],
          },
        },
        {
          model: Category,
        },
      ],
      attributes: { exclude: ['author_id', 'tag_ids'] },
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
              'mobile',
              'email',
              'last_login',
              'intro',
              'profile',
              'registered_at',
              'gender',
              'created_at',
              'updated_at',
              'password',
              'tag_ids',
            ],
          },
        },
        {
          model: Tag,
          attributes: {
            exclude: ['created_at', 'updated_at', 'PostTag'],
          },
        },
        {
          model: Category,
        },
      ],
      attributes: { exclude: ['author_id', 'tag_ids'] },
    });

    if (post) {
      return post;
    }
    throw new PostNotFoundException(postId);
  }

  // async deletePost(postId: number, userId: number) {
  //   return this.postRepository.destroy({ where: { id: postId, userId } });
  // }

  async updatePost(postId: number, data: object) {
    const [numberOfAffectedRows, updatedPost] =
      await this.postRepository.update(
        { ...data },
        {
          where: {
            id: postId,
          },
          returning: true,
        },
      );
    if (numberOfAffectedRows === 0) {
      throw new PostNotFoundException(postId);
    }
    return updatedPost;
  }

  async createPostTags(postId: number, tagIds: Array<number>) {
    tagIds.map(
      async (tagId) =>
        await this.postTagRepository.create({ post_id: postId, tag_id: tagId }),
    );
    return;
  }

  async createPostCategories(postId: number, categoriesIds: Array<number>) {
    console.log(categoriesIds);

    categoriesIds.map(
      async (categoryId) =>
        await this.postCategory.create({
          post_id: postId,
          category_id: categoryId,
        }),
    );
    return;
  }
}
