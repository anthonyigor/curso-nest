import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UserModule } from './modules/users/user.module';
import { LoginModule } from './modules/login/login.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [UserModule, ProductsModule, LoginModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe
    }
  ],
})
export class AppModule {}
