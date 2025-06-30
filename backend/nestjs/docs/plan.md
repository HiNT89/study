# ✨ LỘ TRÌNH HỌC NESTJS CHI TIẾT (DỰA TRÊN KHÓA HỌC YOUTUBE)

## Tổng Quan

- **Mục tiêu:** Học NestJS từ cơ bản đến triển khai project thực tế.
- **Thời gian:** 6-8 tuần
- **Yêu cầu:** Biết cơ bản về Node.js, TypeScript, ExpressJS là lợi thế.

---

## Tuần 1-2: Cơ Bản NestJS

### Kiến Thức

- NestJS architecture (DI, Module, Controller, Service)
- Tạo project với `Nest CLI`
- Module organization
- Routing basics (`@Get`, `@Post`, `@Body`, `@Param`)

### Thực hành

- Hello world API
- Tạo module `users`, controller và service

---

## Tuần 3: DTO & Validation

### Kiến Thức

- Data Transfer Object (DTO)
- `class-validator` để validate dữ liệu
- Pipes & ValidationPipe

### Thực hành

- Tạo API đăng ký người dùng
- Validate input (email, password, phone number...)

---

## Tuần 4-5: Database & CRUD

### Kiến Thức

- Kết nối DB với TypeORM hoặc Prisma
- Entity, Repository, Service layer
- CRUD trong controller với DB

### Thực hành

- Tạo bảng users/products/posts
- Viết API: create, getAll, getOne, update, delete

---

## Tuần 6: Authentication & Guards

### Kiến Thức

- JWT Authentication (`@nestjs/jwt`)
- Login / Register flow
- Guards & Role-based Access
- Middleware for token check

### Thực hành

- API /auth/login, /auth/register
- Đưa token vào header và verify

---

## Tuần 7: Nâng cao & Swagger

### Kiến Thức

- Cấu hình ứng dụng với `@nestjs/config`
- Swagger docs `@nestjs/swagger`
- Interceptors (response format), Filters (exception)

### Thực hành

- Tạo doc API qua Swagger
- Tự định nghĩa lỗi custom

---

## Tuần 8: Testing & Triển khai

### Kiến Thức

- Unit test với Jest
- E2E test với Supertest
- Dockerize ứng dụng
- CI/CD basics

### Thực hành

- Test controller với Jest
- Viết Dockerfile, docker-compose

---

## DỰ Án Cuối Khóa

- Quản lý người dùng, đăng nhập
- CRUD bài viết/blog/products
- Swagger API
- Docker + PostgreSQL

---

## Tài Liệu Khuyên Dùng

- [https://docs.nestjs.com](https://docs.nestjs.com)
- [https://typeorm.io](https://typeorm.io)
- [https://www.prisma.io/docs](https://www.prisma.io/docs)

---

Muốn sinh file offline (PDF/Markdown) hoặc project mẫu, hãy báo mình! ✨
