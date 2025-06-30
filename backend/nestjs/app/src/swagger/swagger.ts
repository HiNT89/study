import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import AppConfig from '../config';

import configuration from '@/config/configuration';

const initSwagger = (app: INestApplication) => {
  const configApp = configuration();
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(configApp.swagger.title || '')
    .setDescription(configApp.swagger.description || '')
    .setVersion(configApp.swagger.version || '')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(configApp.swagger.path, app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      persistAuthorization: true,
    },
  });
};

export default initSwagger;
