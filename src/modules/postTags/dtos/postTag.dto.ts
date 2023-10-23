import { IsNotEmpty } from 'class-validator';

export class PostTagDto {
  @IsNotEmpty()
  readonly post_id: number;

  @IsNotEmpty()
  readonly tag_id: number;
}
