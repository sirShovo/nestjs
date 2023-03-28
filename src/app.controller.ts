import { Controller, Get, Param, Query } from '@nestjs/common';
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

  // Recibiendo Query params
  @Get('products/all')
  getAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `Products: limit => ${limit}, offset ${offset}`;
  }

  // Una forma de hacerlo
  // @Get('products/all')
  // getAll(@Query() params: { limit: number; offset: number }) {
  //   const { limit, offset } = params;
  //   return `Products: limit => ${limit}, offset ${offset}`;
  // }
}
