import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from '../services';
import { Post as PostEntity } from '../entities';
import { PostDto } from '../dtos';
import { JwtAuthGuard } from 'src/modules/auth/guards';
import { ReqWidthUser } from 'src/modules/auth/interfaces';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async createPost(
    @Body() post: PostDto,
    @Request() req: ReqWidthUser,
  ): Promise<PostEntity> {
    return await this.postService.createPost(post, req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getPostById(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.getPostById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updatePost(
    @Param('id') id: number,
    @Body() post: PostDto,
  ): Promise<PostEntity[]> {
    return await this.postService.updatePost(id, post);
  }
}
