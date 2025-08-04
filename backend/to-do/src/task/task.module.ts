import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from './entities/task/task';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from '@/type/entities/type/type';
import { TypeService } from '@/type/type.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Type])],
  controllers: [TaskController],
  providers: [TaskService, Type, TypeService],
})
export class TaskModule {}
