import { IsNotEmpty, MinLength } from 'class-validator';

export class PostMetaDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly key: string;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  readonly post_id: number;
}
