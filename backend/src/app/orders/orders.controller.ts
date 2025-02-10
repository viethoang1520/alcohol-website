import { Body, Controller, Post, Session, Req, UnauthorizedException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CartsService } from '../carts/cart.service';
import { Guest } from 'src/entities/guest.entity';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly cartsService: CartsService
  ){ }
  @Post('checkout')
  async checkout(
    @Session() session: Record<string, any>,
    @Req() req?: any,
    @Body() userInfo?: Guest
  ) {
    // const cart = session.cart || []
    const cart = [
      {
        id: 1,
        productID: 1,
        name: "Rượu Vang Đỏ",
        price: 250000,
        quantity: 2,
        image: "red-wine.jpg"
      },
      {
        id: 2,
        productID: 3,
        name: "Rượu Whisky",
        price: 850000,
        quantity: 1,
        image: "whisky.jpg"
      }
    ]

    const userLoggedIn = req?.user || null
    if (cart.length === 0) {
      return { message: "Chưa có sản phẩm nào, vui lòng mua sắm thêm" }
    }
    // Logic for user logged in
    if (userLoggedIn) {
      const order = await this.ordersService.createOrderForRegisteredUser(userLoggedIn, cart)
      this.cartsService.clearCart(session)
      return { message: 'Đơn hàng đã được tạo thành công', order };
    } else {
      // Logic for guest
      if (!userInfo.name || !userInfo.phoneNumber|| !userInfo.address) {
        throw new UnauthorizedException('Vui lòng điền đầy đủ thông tin khách hàng.');
      }
      const order = await this.ordersService.createOrderForGuest(userInfo, cart)
      this.cartsService.clearCart(session)
      return { message: 'Đơn hàng đã được tạo thành công', order };
    }
  }

}
