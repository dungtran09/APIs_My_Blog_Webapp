import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

class UserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string | null;

  @IsNotEmpty()
  readonly middleName: string | null;

  readonly mobile: string | null;

  @IsNotEmpty()
  @IsNotEmpty()
  readonly email: string | null;

  readonly registeredAt: Date;

  readonly lastLogin: Date | null;

  readonly intro: string | null;

  readonly profile: string | null;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string | null;

  @IsNotEmpty()
  @IsEnum(Gender, { message: 'Gender must be either Male or Female' })
  readonly gender: Gender;
}

export default UserDto;
