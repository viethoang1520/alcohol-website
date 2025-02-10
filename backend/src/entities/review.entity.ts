import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  ReviewID: number;

  @Column()
  ProductID: number;

  @Column()
  UserID: number;

  @Column()
  rating: number;

  @Column('text', { nullable: true })
  comment: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @ManyToOne(() => Product, product => product.reviews)
  product: Product;

  @ManyToOne(() => User, user => user.reviews)
  user: User;
}