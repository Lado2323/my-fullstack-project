import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/all-exceptions-filter';

config(); // loads .env automatically

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());

  // Optional: enable CORS if your frontend is separate
  app.enableCors();

  // Bind to 0.0.0.0 so Render can detect the port
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`Server running on port ${port}`);
}

bootstrap();
