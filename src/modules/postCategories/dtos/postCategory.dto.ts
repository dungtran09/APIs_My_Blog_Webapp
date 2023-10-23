import { IsNotEmpty } from 'class-validator';

export class PostCategoryDto {
  @IsNotEmpty()
  readonly post_id: string;

  @IsNotEmpty()
  readonly category_id: number;
}
