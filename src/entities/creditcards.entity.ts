import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Orders } from './orders.entity';

@Entity('creditcards')
export class CreditCards 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 19})
  number: string;

  @Column({length: 7})
  expiry_date: string;

  @Column({length: 3})
  cvc: string;

  @OneToMany(() => Orders, (order) => order.creditcards_id)
  orders: Orders[];
}