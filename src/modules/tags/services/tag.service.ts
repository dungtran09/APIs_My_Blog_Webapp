import { Inject, Injectable } from '@nestjs/common';
import { TAG_REPOSITORY } from 'src/core/constants';
import { Tag } from '../entities';
import { TagDto } from '../dtos';
import { TagNotFoundException } from '../exceptions';

@Injectable()
export class TagsService {
  constructor(
    @Inject(TAG_REPOSITORY) private readonly tagRepository: typeof Tag,
  ) {}

  async createTag(tag: TagDto): Promise<Tag> {
    return await this.tagRepository.create<Tag>(tag);
  }

  async getAllTags(): Promise<Tag[]> {
    return await this.tagRepository.findAll<Tag>();
  }

  async getTagById(tagId: number): Promise<Tag> {
    const tag = await this.tagRepository.findOne<Tag>({ where: { id: tagId } });
    if (tag) {
      return tag;
    }
    throw new TagNotFoundException(tagId);
  }

  async updateTag(tagId: number, tag: TagDto) {
    const [numberofRowsEffected, updatedTag] = await this.tagRepository.update(
      {
        ...tag,
      },
      { where: { id: tagId }, returning: true },
    );

    if (numberofRowsEffected === 0) {
      throw new TagNotFoundException(tagId);
    }
    return updatedTag;
  }

  async removeTag(tagId: number) {
    return await this.tagRepository.destroy({ where: { id: tagId } });
  }
}
