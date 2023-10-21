import { IsNotEmpty, MinLength } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(5)
  readonly meta_title: string;

  @IsNotEmpty()
  @MinLength(4)
  readonly slug: string;

  @IsNotEmpty()
  @MinLength(4)
  readonly content: string;
}
