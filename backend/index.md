# Phân tích repo backend mẫu (dành cho người mới học Backend)

---

## 1. Các tính năng (Features)

Dựa trên cấu trúc thư mục và tên file, repo này có các tính năng chính sau:

- **Quản lý tài khoản:**  
  Các module: `account`, `account-customer`, `account-order`  
  → Quản lý tài khoản người dùng, khách hàng, đơn hàng liên quan đến tài khoản.

- **Xác thực & phân quyền:**  
  Các module: `auth`, `permission`, `login-history`, `mail-otp`  
  → Xác thực, phân quyền, lịch sử đăng nhập, gửi mã OTP qua email.

- **Quản lý đơn hàng:**  
  Các module: `order`, `order-detail`, `order-draft`, `order-ipn`, `order-pay-on-behalf`  
  → Quản lý đơn hàng, chi tiết, xử lý thanh toán.

- **Quản lý sản phẩm & dịch vụ:**  
  Các module: `product`, `product-category`, `product-option`, `product-type`, `rate-service`  
  → Quản lý sản phẩm, loại, tùy chọn, đánh giá dịch vụ.

- **Quản lý khách hàng:**  
  Các module: `customer`, `customer-classification`, `customer-note`, `customer-source`  
  → Phân loại, ghi chú, quản lý nguồn khách hàng.

- **Quản lý thanh toán:**  
  Các module: `payment-detail`, `payment-methods`, `payment-methods-detail`, `prepaid_card_pay_order`, `prepaid-card-face-value`

- **Quản lý kho:**  
  Module: `inventory`, `inventory-detail`

- **Quản lý thông tin công ty:**  
  Module: `company-information`, `company-information-option`

- **Quản lý thông báo:**  
  Module: `notification`

- **Quản lý lịch làm việc, ngày nghỉ:**  
  Module: `holiday-schedule`, `config-schedule`, `config-time`

- **Quản lý ngành nghề kinh doanh:**  
  Module: `business-industry`

- **Quản lý địa lý:**  
  Module: `city`, `country`

- **Quản lý dashboard:**  
  Module: `dashboard` (thống kê, báo cáo)

- **Tích hợp Firebase:**  
  Module: `firebase`

- **Quản lý cấu hình hệ thống:**  
  Module: `general-setting`, `config-nginx`

- **Quản lý đánh giá, tiêu chí:**  
  Module: `evaluation-criteria`

- **Quản lý lịch sử đăng nhập:**  
  Module: `login-history`

- **Quản lý email:**  
  Module: `mail`, `mail-otp`

- **Quản lý alias, ví:**  
  Module: `alias`, `alias-wallet`

- **Quản lý seed/migration database:**  
  Thư mục: `database/migrations`, `database/seeds`

- **Quản lý backup dữ liệu:**  
  File: `backup.sql`

- **Quản lý cấu hình Docker:**  
  Các file: `docker-compose*.yml`, `Dockerfile`

---

## 2. Các kỹ thuật (Techniques)

### a. Framework & Ngôn ngữ

- **NestJS:**  
  Dựa vào file `nest-cli.json`, cấu trúc module, controller, service → sử dụng NestJS (Node.js framework cho BE).
- **TypeScript:**  
  Toàn bộ code sử dụng TypeScript (`.ts`).

### b. Kiến trúc dự án

- **Modular Structure:**  
  Mỗi tính năng là một module riêng biệt trong thư mục `modules/`.
- **MVC Pattern:**  
  Có các file controller, service, repository cho từng module.
- **Abstraction:**  
  Thư mục `abtracts/` chứa các interface, base repository.

### c. Database

- **TypeORM:**  
  Thư mục `database/` có file `data-source.ts`, `typeorm-config.service.ts`.
- **Migration & Seed:**  
  Quản lý migration và seed dữ liệu qua các thư mục riêng.
- **PostgreSQL:**  
  Có file `docker-compose-postgres.yml`.

### d. Xử lý dữ liệu & API

- **Interceptor:**  
  Thư mục `interceptor/` xử lý response, log, transform dữ liệu trả về.
- **Pipes:**  
  Thư mục `pipes/` để validate và transform dữ liệu đầu vào.
- **Swagger:**  
  Thư mục `swagger/` để tạo tài liệu API tự động.

### e. Bảo mật

- **JWT Auth:**  
  Module `auth` thường dùng JWT cho xác thực.
- **OTP qua email:**  
  Module `mail-otp`.
- **Phân quyền:**  
  Module `permission`.

### f. Tích hợp & Công cụ

- **Docker:**  
  Chạy ứng dụng bằng Docker, có các file cấu hình cho nhiều dịch vụ (Postgres, Redis).
- **Redis:**  
  Module `redis` và file `docker-compose-redis.yml`.
- **Google Sheet API:**  
  File `credential_ggsheet.json`.
- **Firebase:**  
  Module `firebase`.

### g. Testing

- **E2E Test:**  
  Thư mục `test` có file `app.e2e-spec.ts`, sử dụng Jest cho kiểm thử end-to-end.

### h. Cấu hình & Quản lý môi trường

- **Config:**  
  Thư mục `config/` quản lý cấu hình ứng dụng.
- **Environment Variables:**  
  Sử dụng các file `.json` cho credential, token.

---

## 3. Hướng dẫn cho người mới học

- Tìm hiểu **NestJS**: module, controller, service, repository.
- Tìm hiểu **TypeORM**: kết nối DB, migration, seed.
- Tìm hiểu **Docker**: chạy ứng dụng, cấu hình dịch vụ liên quan.
- Tìm hiểu về **Interceptor, Pipe, Decorator** trong NestJS.
- Tìm hiểu về **phân quyền, xác thực JWT**.
- Tìm hiểu về **tổ chức code theo module**.
- Tìm hiểu về **testing với Jest**.

---

> Nếu bạn muốn phân tích chi tiết từng module hoặc file, hãy yêu cầu cụ thể module hoặc file bạn quan tâm!
