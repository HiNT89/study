import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { Serialize } from '@/common/decorators/serialize.decorator';
import { UserResponseDto } from './dto/user-response.dto';
import { ApiPaginatedResponse } from '@/common/decorators/api-paginated-response.decorator';
import { ApiArrayResponse } from '@/common/decorators/api-array-response.decorator';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return { msg: 'Authenticated!' };
  }

  // @UseInterceptors(ResponseInterceptor, PaginationInterceptor)
  @Get()
  @ApiArrayResponse(UserResponseDto)
  @ApiPaginatedResponse(UserResponseDto)
  @Serialize(UserResponseDto)
  users(@Query('page') page?: string, @Query('limit') limit?: string) {
    const pageNum = page ? +page : 1;
    const limitNum = limit ? +limit : 10;
    return this.usersService.findAll(pageNum, limitNum);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
