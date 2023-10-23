import { IsNotEmpty, MinLength } from 'class-validator';

export class PostCommentDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @IsNotEmpty()
  readonly published: boolean;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  readonly post_id: number;
}
