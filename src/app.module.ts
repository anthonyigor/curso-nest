import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
