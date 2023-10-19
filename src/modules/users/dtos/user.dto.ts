import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Gender, { message: 'Gender must be either Male or Female' })
  readonly gender: Gender;
}

export default UserDto;
