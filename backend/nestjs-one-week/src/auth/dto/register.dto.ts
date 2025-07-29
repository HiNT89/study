import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address of the user',
  })
  email: string;

  @MinLength(6)
  @ApiProperty({
    example: 'password123',
    description: 'Password for the user',
  })
  password: string;

  @MinLength(6)
  @ApiProperty({
    example: 'password123',
    description: 'Password for the user',
  })
  confirmPassword: string;
}
