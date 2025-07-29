import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'email ',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'password123', description: 'password' })
  password: string;
}
