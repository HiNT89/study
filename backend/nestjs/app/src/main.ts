import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import initSwagger from './swagger/swagger';
import { ResponseInterceptor } from '@/common/interceptors/response.interceptor';
import { PaginationInterceptor } from '@/common/interceptors/pagination.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new PaginationInterceptor(),
  );
  initSwagger(app);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
