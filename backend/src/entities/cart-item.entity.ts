import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from './product.entity';

export enum Unit {
  BOTTLE = 'Bottle',
  LITER = 'Liter'
}

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  cartItemID: number;

  @Column()
  cartID: number;

  @Column()
  productID: number;

  @Column()
  quantity: number;

  @Column({
    type: 'enum',
    enum: Unit
  })
  unit: Unit;

  @ManyToOne(() => Cart, cart => cart.cartItems)
  cart: Cart;

  @ManyToOne(() => Product, product => product.cartItems)
  product: Product;
}