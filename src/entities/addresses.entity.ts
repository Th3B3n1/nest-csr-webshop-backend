import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Orders } from './orders.entity';

@Entity({name: "addresses"})
export class Addresses 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 32})
  country: string;

  @Column({length: 10})
  zipcode: string;

  @Column({length: 32})
  city: string;

  @Column({length: 32})
  street: string;

  @Column({length: 6})
  building_number: string;
  
  @OneToMany(() => Orders, (order) => order.addresses_id)
  orders: Orders[];
}