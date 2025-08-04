import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateTypeDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'type name', description: 'Name of the type' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '#FFFFFF',
    description: 'Color associated with the type (HEX format)',
  })
  color: string;
}
