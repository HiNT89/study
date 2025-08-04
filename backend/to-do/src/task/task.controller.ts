import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TypeService } from '@/type/type.service'; // Adjust the import path as necessary
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly service: TaskService,
    private readonly typeService: TypeService,
  ) {}
  // Controller logic can be added here

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'List of tasks returned' })
  getTasks() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a type by ID' })
  @ApiResponse({ status: 200, description: 'Task found' })
  getTask(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new type' })
  @ApiResponse({ status: 200, description: 'Task created successfully' })
  create(@Body() body: CreateTaskDto) {
    return this.service.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing type' })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.service.update(Number(id), body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a type' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  deleteTask(@Param('id') id: string) {
    return this.service.update(Number(id), {}, true);
  }
}
