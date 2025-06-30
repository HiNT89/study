import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import AppConfig from '../config';

const initSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(AppConfig.TITLE)
    .setDescription(AppConfig.DESCRIPTION)
    .setVersion(AppConfig.VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(AppConfig.SWAGGER_PATH, app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      persistAuthorization: true,
    },
  });
};

export default initSwagger;
