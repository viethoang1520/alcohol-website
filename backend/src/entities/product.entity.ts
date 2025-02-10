import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { CartItem } from './cart-item.entity';
import { OrderDetail } from './order-detail.entity';
import { Review } from './review.entity';
import { Favorite } from './favorite.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productID: number;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  alcoholContent: number;

  @Column({ nullable: true })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => CartItem, cartItem => cartItem.product)
  cartItems: CartItem[];

  @OneToMany(() => OrderDetail, orderDetail => orderDetail.product)
  orderDetails: OrderDetail[];

  @OneToMany(() => Review, review => review.product)
  reviews: Review[];

  @OneToMany(() => Favorite, favorite => favorite.product)
  favorites: Favorite[];
}