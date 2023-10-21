import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TopicsService } from '../services';
import { Topic as TopicEntity } from '../entities';
import { TopicDto } from '../dtos';
import { JwtAuthGuard } from 'src/modules/auth/guards';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicService: TopicsService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  async getAllTopics() {
    return this.topicService.getAllTopics();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getTopicById(@Param('id') id: number): Promise<TopicEntity> {
    return this.topicService.getTopicById(id);
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async createTopic(@Body() topic: TopicDto): Promise<TopicEntity> {
    return await this.topicService.createTopic(topic);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateTopic(
    @Param('id') id: number,
    @Body() topic: TopicDto,
  ): Promise<TopicEntity[]> {
    return await this.topicService.updateTopic(id, topic);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeTopic(@Param('id') id: number) {
    return await this.topicService.removeTopic(id);
  }
}
