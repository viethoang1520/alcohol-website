import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, PrimaryColumn, BeforeInsert } from 'typeorm';
import { Cart } from './cart.entity';
import { Order } from './order.entity';
import { Review } from './review.entity';
import { Favorite } from './favorite.entity';
import { generateUserID } from 'src/utils/id-generator';

export enum MembershipLevel {
  STANDARD = 'Standard',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum'
}

export enum UserType {
  REGISTERED = 'Registered',
  GUEST = 'Guest'
}

@Entity()
export class User {
  @PrimaryColumn()
  userID: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column()
  dateOfBirth: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ default: 0 })
  loyaltyPoints: number;

  @Column({
    nullable: false,
    type: 'enum',
    enum: UserType,
  })
  type: UserType;

  @Column({
    type: 'enum',
    enum: MembershipLevel,
    default: MembershipLevel.STANDARD
  })
  membershipLevel: MembershipLevel;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Cart, cart => cart.user)
  carts: Cart[];

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Review, review => review.user)
  reviews: Review[];

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorites: Favorite[];

   @BeforeInsert()
  generateUserID() {
    this.userID = generateUserID();
  }
}