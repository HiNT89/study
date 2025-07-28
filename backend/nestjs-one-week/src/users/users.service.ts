import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user/user';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async update(id: number, updateUserDto: { name: string }): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) return null;
    user.name = updateUserDto.name;
    return this.userRepo.save(user);
  }

  async remove(id: number): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) return null;
    await this.userRepo.remove(user);
    return user;
  }
}
