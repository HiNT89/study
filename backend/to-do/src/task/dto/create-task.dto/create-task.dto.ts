import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'task name', description: 'Name of the task' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'task progress',
    description: 'Progress of the task',
  })
  progress: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'task description',
    description: 'Description of the task',
  })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'type id', description: 'ID of the task type' })
  type_id: number | string; // Assuming type_id is a number or string
}
