import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity('guest')
export class Guest {
    @PrimaryGeneratedColumn('increment')
    guestID: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'varchar', length: 20 })
    phoneNumber: string;

    @Column({ type: 'text' })
    address: string;

    @OneToOne(() => Order, order => order.guest)
    order: Order;
}