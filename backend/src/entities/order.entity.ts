import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { OrderDetail } from './order-detail.entity';
import { Guest } from './guest.entity';

export enum OrderStatus {
  PENDING = 'Pending',
  PROCESSING = 'Processing',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderID: number;

  @Column({ nullable: true })
  userID: string;

  @Column({ nullable: true })
  guestID: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING
  })
  orderStatus: OrderStatus;

  @Column()
  shippingAddress: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.orders)
  user: User;

  @OneToMany(() => OrderDetail, orderDetail => orderDetail.order)
  orderDetails: OrderDetail[];

  @OneToOne(() => Guest)
  @JoinColumn({ name: 'guestID', referencedColumnName: 'guestID' })
  guest: Guest;
}