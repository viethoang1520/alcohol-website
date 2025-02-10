import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from 'src/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsModule } from '../carts/cart.module';
import { OrderDetail } from 'src/entities/order-detail.entity';
import { User } from 'src/entities/user.entity';
import { Guest } from 'src/entities/guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetail, User, Guest]), CartsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports:[OrdersService]
})
export class OrdersModule {}
