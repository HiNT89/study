# 📘 NestJS Blog API - Hoàn chỉnh

## 📌 Mục tiêu

Xây dựng RESTful API cơ bản sử dụng NestJS với module `users`, sử dụng Controller, Service, DTO, Validation, PostgreSQL và TypeORM.

---

## 🔧 Công nghệ sử dụng

- [NestJS](https://nestjs.com/)
- PostgreSQL
- TypeORM
- Class-validator / class-transformer
- Node.js + TypeScript

---

## 🚀 Bắt đầu

### 1. Cài đặt Nest CLI

```bash
npm install -g @nestjs/cli
```

### 2. Tạo Project

```bash
nest new nest-blog-api
cd nest-blog-api
```

---

## 🔌 Cấu hình PostgreSQL + TypeORM

### 1. Cài các gói cần thiết

```bash
npm install @nestjs/typeorm typeorm pg class-validator class-transformer
npm install swagger-ui @nestjs/swagger @nestjs/config pg
```

### 2. Cập nhật `app.module.ts`

```ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Cho phép dùng ở mọi nơi
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('DB_HOST'),
          port: +config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

---

## 👤 Module `users`

### Tạo module + entity + DTO

```bash
nest g module type
nest g controller type
nest g service type
nest g class type/entities/type --no-spec
nest g class type/dto/create-type.dto --no-spec
```

---

### `user.entity.ts`

```ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

---

### `create-user.dto.ts`

```ts
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
}
```

---

### `users.service.ts`

```ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

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
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) return null;
    await this.userRepo.remove(user);
    return user;
  }
}
```

---

### `users.controller.ts`

```ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: { name: string }) {
    return this.usersService.update(Number(id), body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
```

---

### `users.module.ts`

```ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

---

## 🧪 Kiểm thử API

### Chạy server

```bash
npm run start:dev
```

### Test API với Postman hoặc curl

#### ✅ GET `/users`

```bash
curl http://localhost:3000/users
```

#### ✅ POST `/users`

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "HiNT"}'
```

---

## 📚 Lý thuyết NestJS

| Thành phần   | Vai trò                                                 |
| ------------ | ------------------------------------------------------- |
| `Module`     | Tổ chức feature logic thành khối riêng biệt             |
| `Controller` | Nhận HTTP request, gọi service                          |
| `Service`    | Chứa logic nghiệp vụ, có thể tái sử dụng                |
| `Entity`     | Mapping giữa class và bảng trong DB                     |
| `DTO`        | Cấu trúc dữ liệu đầu vào                                |
| `Validation` | Kiểm tra dữ liệu đầu vào với `class-validator`          |
| `DI`         | Inject tự động service vào controller hoặc service khác |

---

## ✅ TODO Gợi ý mở rộng

- [ ] Thêm endpoint `GET /users/:id`, `PUT`, `DELETE`
- [ ] Viết unit test cho Service
- [ ] Thêm Auth (JWT)
- [ ] Tách config DB ra `.env` file

---

## ✍️ Tác giả

- HiNT @ Plusc AI
