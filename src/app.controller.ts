import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Recibiendo un parametro por get
  @Get('product/:productId')
  getProduct(@Param('productId') productId: number) {
    return `Product ${productId}`;
  }

  // Recibiendo varios parametros por get
  @Get('category/:categoryId/product/:productId')
  getProducts(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: number,
  ) {
    return `Product ${productId} and the category is ${categoryId}`;
  }
}
