src/
├── main.ts                         # File bootstrap ứng dụng
├── app.module.ts                  # Module gốc (root module)
│
├── config/                        # Quản lý cấu hình (dotenv, env schema, config service)
│   ├── configuration.ts
│   ├── config.module.ts
│   └── validation.schema.ts
│
├── common/                        # Các thành phần dùng chung toàn app
│   ├── constants/
│   ├── decorators/
│   ├── exceptions/
│   ├── filters/                   # Global exception filters
│   ├── guards/                    # Auth & permission guards
│   ├── interceptors/
│   ├── middleware/
│   └── utils/
│
├── core/                          # Thành phần cốt lõi, như logger, database...
│   ├── database/
│   │   ├── database.module.ts
│   │   ├── prisma.service.ts     # hoặc TypeORM/Mongoose service
│   │   └── seed/
│   ├── logger/
│   └── mailer/
│
├── modules/                       # Các domain/module nghiệp vụ
│   ├── auth/                      # Xác thực, đăng nhập, jwt, etc.
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── strategies/
│   │   └── guards/
│   │
│   ├── users/                     # Quản lý người dùng
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   │
│   ├── roles/                     # (VD) phân quyền
│   ├── products/                  # (VD) sản phẩm
│   └── ...                        # Các module khác tùy nghiệp vụ
│
├── jobs/                          # Định nghĩa các scheduled jobs (Bull, Cron...)
│   └── ...
│
├── tasks/                         # Task Queue (Bull, Worker, etc.)
│   └── ...
│
├── graphql/                       # Nếu dùng GraphQL: schema, resolvers, etc.
│
└── interfaces/                    # Interface dùng toàn app (nếu không nằm trong dto/entities)
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

