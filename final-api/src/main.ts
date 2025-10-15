import { config } from 'dotenv';
import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/all-exceptions-filter';

config();



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 5000; // Render provides PORT automatically
  await app.listen(port);

  console.log(`Server running on port ${port}`);
}
bootstrap();
