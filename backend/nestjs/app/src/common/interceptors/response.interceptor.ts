import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Nếu đã là định dạng chuẩn rồi thì không wrap lại nữa
        if (
          typeof data === 'object' &&
          data !== null &&
          'statusCode' in data &&
          'message' in data &&
          'data' in data
        ) {
          return data;
        }

        // Ngược lại thì tự bọc
        const statusCode = context.switchToHttp().getResponse().statusCode;

        return {
          statusCode,
          message: 'Success',
          data,
        };
      }),
    );
  }
}
