import { IsNotEmpty, MaxLength } from 'class-validator';

export class TagDto {
  @IsNotEmpty()
  @MaxLength(20)
  readonly name: string;
}
