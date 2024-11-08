import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UserModule } from './modules/users/user.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [UserModule, ProductsModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
