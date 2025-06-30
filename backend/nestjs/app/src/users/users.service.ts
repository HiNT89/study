import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  // This service can be used to manage user-related operations
  // For example, fetching user data, creating users, etc.
  getUsers() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async createUser(data: CreateUserDto) {
    const { password } = data;
    const hash = await bcrypt.hash(password, 10);
    await this.repo.save({ ...data, password: hash });
  }

  update(id: number, data: UpdateUserDto) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
