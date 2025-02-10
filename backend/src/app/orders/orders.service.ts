import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderStatus } from 'src/entities/order.entity';
import { OrderDetail } from 'src/entities/order-detail.entity';
import { User, UserType } from 'src/entities/user.entity';
import { Guest } from 'src/entities/guest.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailsRepository: Repository<OrderDetail>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>
  ) { }

  // TESTED (1)
  async createOrderForGuest(user: Guest, cart: any[]): Promise<any> {
    const { name, phoneNumber, address, email } = user
    const newGuest = this.guestRepository.create({ name, phoneNumber, address, email })
    await this.guestRepository.save(newGuest)
    const newOrder = this.orderRepository.create({
      guestID: newGuest.guestID,
      totalAmount: cart.length,
      orderStatus: OrderStatus.PENDING,
      shippingAddress: address,
      createdAt: new Date(),
    })
    await this.orderRepository.save(newOrder)
    const newOrderDetails = cart.map(item => this.orderDetailsRepository.create({
      orderID: newOrder.orderID,
      productID: item.productID,
      quantity: item.quantity,
      price: item.price,
    }))
    await this.orderDetailsRepository.save(newOrderDetails)
    return { newOrder, newOrderDetails }
    
  }

  async createOrderForRegisteredUser(user: User, cart: any[]): Promise<any> {
    const { userID, address, ...others } = user
    const newOrder = this.orderRepository.create({
      userID,
      totalAmount: cart.length,
      orderStatus: OrderStatus.PENDING,
      shippingAddress: address,
      createdAt: new Date(),
    })
    await this.orderRepository.save(newOrder)
    const newOrderDetails = cart.map(item => this.orderDetailsRepository.create({
      orderID: newOrder.orderID,
      productID: item.productID,
      quantity: item.quantity,
      price: item.price,
    }))
    await this.orderDetailsRepository.save(newOrderDetails)
    return { newOrder, newOrderDetails }
    
  }
}
