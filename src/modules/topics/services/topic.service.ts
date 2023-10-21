import { Inject, Injectable } from '@nestjs/common';
import { TOPIC_REPOSITORY } from 'src/core/constants';
import { Topic } from '../entities';
import { TopicDto } from '../dtos';
import { TopicNotFoundException } from '../exceptions';

@Injectable()
export class TopicsService {
  constructor(
    @Inject(TOPIC_REPOSITORY)
    private readonly topicRepository: typeof Topic,
  ) {}

  async createTopic(topic: TopicDto): Promise<Topic> {
    return await this.topicRepository.create<Topic>({ ...topic });
  }

  async getAllTopics(): Promise<Topic[]> {
    return await this.topicRepository.findAll<Topic>();
  }

  async getTopicById(topicId: number): Promise<Topic> {
    const topic = await this.topicRepository.findOne<Topic>({
      where: { id: topicId },
    });

    if (topic) {
      return topic;
    }
    throw new TopicNotFoundException(topicId);
  }

  async removeTopic(topicId: number) {
    const deleted = await this.topicRepository.destroy({
      where: { id: topicId },
    });
    if (deleted === 0) {
      throw new TopicNotFoundException(topicId);
    }
    return 'Successfully deleted';
  }

  async updateTopic(topicId: number, data: any) {
    const [numberOfAffectedRows, updatedTopic] =
      await this.topicRepository.update(
        { ...data },
        {
          where: {
            id: topicId,
          },
          returning: true,
        },
      );
    if (numberOfAffectedRows === 0) {
      throw new TopicNotFoundException(topicId);
    }
    return updatedTopic;
  }
}
