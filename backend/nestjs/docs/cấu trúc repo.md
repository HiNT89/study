src/
├── main.ts # File bootstrap ứng dụng
├── app.module.ts # Module gốc (root module)
│
├── config/ # Quản lý cấu hình (dotenv, env schema, config service)
│ ├── configuration.ts
│ ├── config.module.ts
│ └── validation.schema.ts
│
├── common/ # Các thành phần dùng chung toàn app
│ ├── constants/
│ ├── decorators/
│ ├── exceptions/
│ ├── filters/ # Global exception filters
│ ├── guards/ # Auth & permission guards
│ ├── interceptors/
│ ├── middleware/
│ └── utils/
│
├── core/ # Thành phần cốt lõi, như logger, database...
│ ├── database/
│ │ ├── database.module.ts
│ │ ├── prisma.service.ts # hoặc TypeORM/Mongoose service
│ │ └── seed/
│ ├── logger/
│ └── mailer/
│
├── modules/ # Các domain/module nghiệp vụ
│ ├── auth/ # Xác thực, đăng nhập, jwt, etc.
│ │ ├── auth.controller.ts
│ │ ├── auth.service.ts
│ │ ├── auth.module.ts
│ │ ├── strategies/
│ │ └── guards/
│ │
│ ├── users/ # Quản lý người dùng
│ │ ├── dto/
│ │ ├── entities/
│ │ ├── users.controller.ts
│ │ ├── users.service.ts
│ │ └── users.module.ts
│ │
│ ├── roles/ # (VD) phân quyền
│ ├── products/ # (VD) sản phẩm
│ └── ... # Các module khác tùy nghiệp vụ
│
├── jobs/ # Định nghĩa các scheduled jobs (Bull, Cron...)
│ └── ...
│
├── tasks/ # Task Queue (Bull, Worker, etc.)
│ └── ...
│
├── graphql/ # Nếu dùng GraphQL: schema, resolvers, etc.
│
└── interfaces/ # Interface dùng toàn app (nếu không nằm trong dto/entities)
├── auth.interface.ts
├── user.interface.ts
└── ...
test/
├── app.e2e-spec.ts
├── auth/
└── users/

## Các Thư viện hay dùng kèm:

    Validation: class-validator, class-transformer

    ORM: Prisma, TypeORM, hoặc Mongoose

    Auth: @nestjs/passport, @nestjs/jwt

    Task Queue: @nestjs/bull

    Schedule: @nestjs/schedule

    Config: @nestjs/config

# 📆 NestJS Project Structure – Tài liệu cấu trúc thư mục

> Hướng dẫn chi tiết về cách tổ chức thư mục trong ứng dụng NestJS hoàn chỉnh, theo mô hình module, dễ mở rộng và bảo trì.

---

## ✅ Tổng quan

```
src/
├── main.ts
├── app.module.ts
├── config/
├── common/
├── core/
├── modules/
├── jobs/
├── tasks/
├── graphql/
├── interfaces/
test/
```

---

## 📁 `src/` – Thư mục nguồn chính

### `main.ts`

- Điểm khởi động ứng dụng.
- Khởi tạo Nest app, middleware, global pipes/filters.

### `app.module.ts`

- Root module, nơi import các module khác để NestJS biết được các thành phần trong app.

---

## 📁 `config/` – Cấu hình hệ thống

Chứa cấu hình môi trường, validate biến môi trường và cung cấp ConfigService.

| File                   | Mục đích                                       |
| ---------------------- | ---------------------------------------------- |
| `configuration.ts`     | Tập hợp các biến config                        |
| `config.module.ts`     | Đăng ký `ConfigModule`                         |
| `validation.schema.ts` | Schema kiểm tra `.env` (dùng `joi` hoặc `zod`) |

---

## 📁 `common/` – Logic dùng chung

Tập hợp những phần được tái sử dụng giữa các module:

| Folder          | Mô tả                                  |
| --------------- | -------------------------------------- |
| `constants/`    | Các hằng số toàn app                   |
| `decorators/`   | Custom decorators như `@CurrentUser()` |
| `exceptions/`   | Custom exception classes               |
| `filters/`      | Global exception filters               |
| `guards/`       | Auth & Role guards                     |
| `interceptors/` | Logging, transform...                  |
| `middleware/`   | Custom middleware                      |
| `utils/`        | Các hàm tiện ích                       |

---

## 📁 `core/` – Thành phần kỹ thuật

Quản lý các service kỹ thuật: Database, Logger, Mailer...

| Folder      | Mô tả                                       |
| ----------- | ------------------------------------------- |
| `database/` | Cấu hình kết nối và ORM service (`TypeORM`) |
| `logger/`   | Tuỳ biến hệ thống logging                   |
| `mailer/`   | Cấu hình gửi email                          |

---

## 📁 `modules/` – Các module nghiệp vụ

Chia theo domain logic (Domain-Driven Design). Mỗi module là 1 chức năng độc lập.

VD:

```
users/
├── dto/
├── entities/
├── users.controller.ts
├── users.service.ts
└── users.module.ts
```

Các module thường thấy:

| Module      | Chức năng                     |
| ----------- | ----------------------------- |
| `auth/`     | Đăng nhập, JWT, refresh token |
| `users/`    | Quản lý người dùng            |
| `roles/`    | Phân quyền                    |
| `products/` | Quản lý sản phẩm              |

---

## 📁 `jobs/` – Scheduled Jobs

- Tác vụ chạy định kỳ dùng `@nestjs/schedule`
- Ví dụ: xóa bản ghi cũ, gửi email định kỳ...

---

## 📁 `tasks/` – Queue nền

- Xử lý background job bằng `Bull`, `RabbitMQ`,...
- Ví dụ: gửi mail nền, resize ảnh...

---

## 📁 `graphql/` – Nếu dùng GraphQL

Chứa schema, resolvers, types...

---

## 📁 `interfaces/` – Interface chung

Chứa các interface không gắn liền với DTO hay entity. Dùng toàn app.

---

## 📁 `test/` – Kiểm thử

Chứa unit test và e2e test. Có thể chia theo module.

---

## 🌟 Tổng kết

| Thư mục       | Mục đích                         |
| ------------- | -------------------------------- |
| `config/`     | Quản lý config môi trường        |
| `common/`     | Dùng lại giữa các module         |
| `core/`       | Service kỹ thuật (DB, Mailer...) |
| `modules/`    | Tính năng chia theo domain       |
| `jobs/`       | Scheduled jobs                   |
| `tasks/`      | Queue xử lý nền                  |
| `interfaces/` | Interface dùng chung             |
| `test/`       | Các bài kiểm thử                 |

---

## ✅ Best Practices

- Chia module theo domain rõ ràng.
- Đặt logic nghiệp vụ vào service, controller chỉ dùng để xử lý request/response.
- Dùng DTO và entity tách biệt.
- Tách phần kỹ thuật và nghiệp vụ rõ ràng (`core` vs `modules`).
- Không đặt business logic vào `common/`.
