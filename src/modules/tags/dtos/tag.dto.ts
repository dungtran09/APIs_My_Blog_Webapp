import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class TagDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @IsNotEmpty()
  @MaxLength(50)
  readonly meta_title: string;

  @IsNotEmpty()
  readonly slug: string;

  @IsNotEmpty()
  readonly content: string;
}
