import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module.js';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(helmet());
  app.use(compression());

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
