import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class PaginationInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const page = parseInt(request.query.page as string, 10);
    const limit = parseInt(request.query.limit as string, 10);

    const isPaginated = !isNaN(page) && !isNaN(limit);

    return next.handle().pipe(
      map((data) => {
        console.log('🚀 ~ PaginationInterceptor<T> ~ map ~ data:', data);
        // Nếu service trả về [items, total] (mảng 2 phần tử)
        if (isPaginated && Array.isArray(data)) {
          const [items, total] = data;
          console.log('🚀 ~ PaginationInterceptor<T> ~ map ~ items:', items);
          return {
            statusCode: 200,
            message: 'Success',
            data: {
              items,
              meta: {
                total,
                page,
                limit,
              },
            },
          };
        }

        // Không phân trang, trả về bình thường
        return {
          statusCode: 200,
          message: 'Success',
          data,
        };
      }),
    );
  }
}
