import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task/task'; // Adjust the import path as necessary
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto';
import { TypeService } from '@/type/type.service'; // Adjust the import path as necessary
import { Type } from '@/type/entities/type/type';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly object: Repository<Task>,
    private readonly typeService: TypeService, // Inject TypeService to check type existence
  ) {}
  findAll() {
    return this.object.find({
      where: { isActive: true },
      relations: ['type'],
    });
  }
  findOne(id: number) {
    return this.object.findOne({
      where: { id, isActive: true },
      relations: ['type'],
    });
  }
  async create(body: CreateTaskDto) {
    const { type_id, ...rest } = body;
    const typeExists = await this.checkTypeExists(+type_id);
    if (!typeExists) {
      return { statusCode: 400, message: 'Type does not exist' };
    }

    const task = {
      ...rest,
      type: typeExists,
    };

    return this.object.save(task);
  }
  async update(id: number, updateTaskDto, isDelete = false) {
    const task = await this.object.findOne({ where: { id } });
    // If the task is not found, return null
    if (!task) return null;
    // If isDelete is true, mark the task as inactive
    if (isDelete) {
      task.isActive = false;
      return this.object.save(task);
    }
    // Otherwise, update the task's name
    const new_task = { ...task, ...updateTaskDto };
    return this.object.save(new_task);
  }

  checkTypeExists(typeId: number): Promise<Type | null> {
    return this.typeService.findOne(typeId);
  }
}
