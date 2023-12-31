import { IsNotEmpty } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly meta_title: string;

  @IsNotEmpty()
  readonly slug: string;

  @IsNotEmpty()
  readonly sumary: string;

  @IsNotEmpty()
  readonly content: string;

  readonly categories_ids: number[];

  readonly tag_ids: number[];

  @IsNotEmpty()
  readonly published: boolean;
}
