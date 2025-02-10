import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { Unit } from './cart-item.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn({ type: 'int' })
  orderDetailID: number;

  @Column()
  orderID: number;

  @Column()
  productID: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({
    type: 'enum',
    enum: ['BOTTLE', 'LITER'], // explicitly list enum values instead of using Unit type
    enumName: 'unit_enum',
    nullable: false
  })
  unit: Unit;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  price: number;

  @ManyToOne(() => Order, order => order.orderDetails, {
    onDelete: 'CASCADE'
  })
  order: Order;

  @ManyToOne(() => Product, product => product.orderDetails, {
    onDelete: 'CASCADE'
  })
  product: Product;
}