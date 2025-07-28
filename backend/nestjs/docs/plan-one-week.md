# 🚀 LỊCH TRÌNH HỌC NESTJS TRONG 1 TUẦN (CẤP TỐC)

## ✅ Mục tiêu

- Học và ứng dụng nhanh NestJS để làm một project CRUD + Auth cơ bản
- Hoàn thành một mini-project có Swagger và Docker

---

## 📅 Ngày 1: Kiến trúc và Setup cơ bản

**Lý thuyết:**

- NestJS architecture: Module, Controller, Service, DI
- Nest CLI, tạo project

**Thực hành:**

- Tạo project `nest-blog-api`
- Tạo module `users`, viết controller + service
- Test các route `GET`, `POST`

⏱️ Thời gian học: ~3–4 giờ

---

## 📅 Ngày 2: DTO, Validation, Pipes

**Lý thuyết:**

- DTO là gì, `class-validator`, `ValidationPipe`

**Thực hành:**

- Viết DTO cho `UserDto` (validate email, password)
- Tạo API `/users/register`, validate input

⏱️ Thời gian học: ~3 giờ

---

## 📅 Ngày 3: Kết nối Database và CRUD

**Lý thuyết:**

- TypeORM basics: Entity, Repository, Migration
- Cấu hình kết nối PostgreSQL

**Thực hành:**

- Tạo `UserEntity`
- Viết API: `create`, `getAll`, `getById`, `update`, `delete`

⏱️ Thời gian học: ~4 giờ

---

## 📅 Ngày 4: Authentication (JWT)

**Lý thuyết:**

- JWT trong NestJS
- AuthModule, Guards, Passport Strategy

**Thực hành:**

- Tạo `/auth/register`, `/auth/login`
- Trả JWT, cấu hình `JwtAuthGuard`
- Viết API `/users/me` bảo vệ bằng JWT

⏱️ Thời gian học: ~4–5 giờ

---

## 📅 Ngày 5: Swagger + Middleware + Interceptor

**Lý thuyết:**

- Tạo Swagger bằng `@nestjs/swagger`
- Middleware, Interceptor cơ bản
- Cấu hình `@nestjs/config`

**Thực hành:**

- Tài liệu hóa API (Swagger UI)
- Middleware log request
- Format response với Interceptor

⏱️ Thời gian học: ~3 giờ

---

## 📅 Ngày 6: Docker hóa và Test cơ bản

**Lý thuyết:**

- Dockerfile, docker-compose
- Unit test với Jest

**Thực hành:**

- Viết `Dockerfile`, `docker-compose.yml`
- Viết 1 unit test cho `UserService`

⏱️ Thời gian học: ~4 giờ

---

## 📅 Ngày 7: Tổng kết – Làm mini project cuối tuần

**Mini Project: Blog API**

- CRUD `posts`
- Auth người dùng
- Swagger docs
- Deploy docker local

**Tips:**

- Làm UI đơn giản bằng Postman hoặc Swagger
- Nếu dư thời gian, thử thêm phân quyền (Role: Admin/User)

⏱️ Thời gian học: ~6–8 giờ

---

## 🎁 Tài nguyên tham khảo

| Mục             | Link                                         |
| --------------- | -------------------------------------------- |
| NestJS Docs     | https://docs.nestjs.com                      |
| TypeORM Docs    | https://typeorm.io                           |
| Swagger NestJS  | https://docs.nestjs.com/openapi/introduction |
| class-validator | https://github.com/typestack/class-validator |
| JWT             | https://www.npmjs.com/package/@nestjs/jwt    |
