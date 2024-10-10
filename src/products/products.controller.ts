import { Controller, Get } from "@nestjs/common";

@Controller()
export class ProductController {
  
  @Get('/products')
  getProduct(): string {
    return 'Products'
  }

}