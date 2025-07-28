import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id, isActive: true } });
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find({ where: { isActive: true } });
  }

  async create(
    dto: CreateUserDto,
  ): Promise<User | { statusCode: number; message: string }> {
    console.log('🚀 ~ UsersService ~ create ~ dto:', dto);
    // check if passwords match
    if (dto.password !== dto.confirmPassword) {
      return {
        statusCode: 400,
        message: 'Passwords do not match',
      };
    }
    // check if email already exists
    const existingUser = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (existingUser) {
      return {
        statusCode: 400,
        message: 'Email already exists',
      };
    }
    // create and save the user
    const body = {
      name: dto.name,
      email: dto.email,
      password: dto.password, // in a real app, hash the password before saving
    };
    const user = this.userRepo.create(body);
    return this.userRepo.save(user);
  }

  async update(
    id: number,
    updateUserDto: { name: string },
  ): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) return null;
    user.name = updateUserDto.name;
    return this.userRepo.save(user);
  }

  async remove(id: number): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { id, isActive: true } });
    if (!user) return null;
    user.isActive = false;
    await this.userRepo.save(user);
    return user;
  }
}
