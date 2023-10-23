import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { TagsService } from '../services/tag.service';
import { TagDto } from '../dtos';
import { Tag } from '../entities';
import { JwtAuthGuard } from 'src/modules/auth/guards';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async createTag(@Body() tag: TagDto): Promise<Tag> {
    return this.tagService.createTag(tag);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllTags(): Promise<Tag[]> {
    return this.tagService.getAllTags();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getTagById(@Param() tagId: number): Promise<Tag> {
    return this.tagService.getTagById(tagId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateTag(@Param() tagId: number, @Body() tag: TagDto): Promise<Tag[]> {
    return this.tagService.updateTag(tagId, tag);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remvoveTag(@Param() tagId: number) {
    return this.tagService.removeTag(tagId);
  }
}
