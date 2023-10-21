import { IsNotEmpty, MinLength } from 'class-validator';

export class TagDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @IsNotEmpty()
  readonly metaTitle: string | null;
  readonly slug: string;

  @IsNotEmpty()
  readonly content: string | null;
}
