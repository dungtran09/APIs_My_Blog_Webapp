import { IsNotEmpty, MinLength } from 'class-validator';

export class TopicDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(5)
  readonly metaTile: string;

  @IsNotEmpty()
  @MinLength(4)
  readonly slug: string;

  @IsNotEmpty()
  @MinLength(4)
  readonly content: string;
}
