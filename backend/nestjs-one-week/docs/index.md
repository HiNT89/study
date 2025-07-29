## Middleware, Guards, Interceptors, Pipes

[Client] → Middleware (gác cổng)
→ Guard (soát vé)
→ Pipe (sơ chế nguyên liệu)
→ Controller (đầu bếp nấu ăn)
→ Interceptor (theo dõi camera, chỉnh sửa món)
→ [Response gửi về]

## IOC/DI

NestJS / DI | Đời sống thực tế
UserService | Máy pha cà phê
AppController | Nhân viên pha chế
NestJS IoC Container | Quản lý quán / người cung cấp
@Injectable() | Ghi chú: “máy này sẵn sàng sử dụng”
Tự inject bằng constructor | Quản lý tự giao máy cho nhân viên
Không cần new UserService() | Không cần đi mua hay bảo trì máy


## Tìm hiểu mô hình quan hệ dữ liệu , mô hình thực thể liên kết.
