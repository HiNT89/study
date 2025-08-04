import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS Blog API')
    .setDescription('API documentation for the blog project')
    .setVersion('1.0')
    // .addTag('blog')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Truy cập: http://localhost:8080/docs
  // Cấu hình ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
