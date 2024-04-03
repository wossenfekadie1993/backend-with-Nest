import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConflictExceptionFilter } from './conflict-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ConflictExceptionFilter());
  await app.listen(3000);
}
bootstrap();
