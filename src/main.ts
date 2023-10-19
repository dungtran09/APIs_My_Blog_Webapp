import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global prefix
  app.setGlobalPrefix('api/v1');

  //handler all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(3000);
}
bootstrap();
