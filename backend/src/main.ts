import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(
    session({
      secret: 'hello-world',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
        secure: false,
        httpOnly: true,
      },
      name: 'hoang-duong-session'
    }),
  );
  app.enableCors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
