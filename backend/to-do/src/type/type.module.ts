import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { Type } from './entities/type/type';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { TaskModule } from '../task/task.module';
import { Task } from '@/task/entities/task/task';

@Module({
  imports: [TypeOrmModule.forFeature([Type, Task])],
  controllers: [TypeController],
  providers: [TypeService, Task],
  exports: [TypeService], // Export TypeService and TypeOrmModule for use in other modules
})
export class TypeModule {}
