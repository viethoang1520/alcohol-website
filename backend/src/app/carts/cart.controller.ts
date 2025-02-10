import { Controller, Get, Post, Body, Delete, Param, Session, Put } from '@nestjs/common';
import { CartsService } from './cart.service';
import { ProductsService } from 'src/app/products/product.service';

@Controller('cart')
export class CartsController {
  constructor(
    private readonly cartService: CartsService,
    private readonly productService: ProductsService
  ) { }

  @Get()
  getCart(@Session() session: any) {
    return this.cartService.getCart(session);
  }

  @Post('add')
  async addToCart(
    @Session() session: any,
    @Body() data: { productID: number; quantity: number }
  ) {
    const product = await this.productService.getProductByID(data.productID); // Giả sử có ProductService
    return this.cartService.addToCart(session, product, data.quantity);
  }

  @Delete(':productID')
  removeFromCart(@Session() session: any, @Param('productID') productID: number) {
    return this.cartService.removeFromCart(session, productID);
  }

  @Put(':productID')
  updateQuantity(
    @Session() session: any,
    @Param('productID') productID: number,
    @Body() data: { quantity: number }
  ) {
    return this.cartService.updateQuantity(session, productID, data.quantity);
  }

  @Delete()
  clearCart(@Session() session: any) {
    return this.cartService.clearCart(session);
  }
}