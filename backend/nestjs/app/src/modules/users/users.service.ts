import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update.dto';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  // This service can be used to manage user-related operations
  // For example, fetching user data, creating users, etc.
  async findAll(
    page: number,
    limit: number,
  ): Promise<Promise<[User[], number]>> {
    return await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { id: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async createUser(data: CreateUserDto) {
    const { password, email } = data;
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('User with this email already exists');
    }
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
