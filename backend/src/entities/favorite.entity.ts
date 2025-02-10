import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Favorite {
  @Column({ primary: true })
  userID: number;

  @Column({ primary: true })
  productID: number;

  @ManyToOne(() => User, user => user.favorites)
  user: User;

  @ManyToOne(() => Product, product => product.favorites)
  product: Product;
}