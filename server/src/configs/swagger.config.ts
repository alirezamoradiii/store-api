import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication) => {
  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder().build();

    const doc = SwaggerModule.createDocument(app, config);

    return SwaggerModule.setup('/api/docs', app, doc);
  }
};
