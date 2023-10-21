import { IsNotEmpty, MinLength } from 'class-validator';

export class TopicDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly name: string;
}
