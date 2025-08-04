import { TypeService } from './type.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTypeDto } from './dto/create-type.dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto/update-type.dto';

@Controller('type')
export class TypeController {
  constructor(private readonly service: TypeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all types' })
  @ApiResponse({ status: 200, description: 'List of types returned' })
  getTypes() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a type by ID' })
  @ApiResponse({ status: 200, description: 'Type found' })
  getType(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new type' })
  @ApiResponse({ status: 200, description: 'Type created successfully' })
  create(@Body() body: CreateTypeDto) {
    // check hex color format
    const isHexColor = this.service.isHexColor(body.color);
    if (!isHexColor) {
      return {
        statusCode: 400,
        message: 'Invalid hex color format',
      };
    }
    return this.service.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing type' })
  @ApiResponse({ status: 200, description: 'Type updated successfully' })
  updateType(@Param('id') id: string, @Body() body: UpdateTypeDto) {
    // check hex color format
    const isHexColor = this.service.isHexColor(body.color);
    if (!isHexColor) {
      return {
        statusCode: 400,
        message: 'Invalid hex color format',
      };
    }
    return this.service.update(Number(id), body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a type' })
  @ApiResponse({ status: 200, description: 'Type deleted successfully' })
  deleteType(@Param('id') id: string) {
    return this.service.update(Number(id), {}, true);
  }
}
