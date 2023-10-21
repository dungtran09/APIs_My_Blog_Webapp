import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global prefix
  app.setGlobalPrefix('api/v1');

  //handler all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());

  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
