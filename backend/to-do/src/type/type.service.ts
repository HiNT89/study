import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './entities/type/type';
import { CreateTypeDto } from './dto/create-type.dto/create-type.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private object: Repository<Type>,
  ) {}
  findAll() {
    return this.object.find({ where: { isActive: true } });
  }
  findOne(id: number) {
    return this.object.findOne({ where: { id, isActive: true } });
  }
  create(body: CreateTypeDto) {
    const type = this.object.create(body);
    return this.object.save(type);
  }
  async update(id: number, updateTypeDto, isDelete = false) {
    const type = await this.object.findOne({ where: { id } });
    // If the type is not found, return null
    if (!type) return null;
    // If isDelete is true, mark the type as inactive
    if (isDelete) {
      type.isActive = false;
      return this.object.save(type);
    }
    // Otherwise, update the type's name
    const new_type = { ...type, ...updateTypeDto };
    return this.object.save(new_type);
  }
  // Utility function to check if a string is a valid hex color code
  isHexColor(text: string): boolean {
    const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return hexRegex.test(text);
  }
}
