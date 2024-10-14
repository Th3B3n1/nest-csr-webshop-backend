import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Products } from './products.entity';
import { Addresses } from './addresses.entity';
import { CreditCards } from './creditcards.entity';

@Entity({name: "orders"})
export class Orders 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  name: string;

  @Column({length: 7, nullable: true})
  cuponcode: string;

  @ManyToOne(() => Addresses, (address) => address.id)
  addresses_id: Addresses;
  
  @ManyToOne(() => CreditCards, (creditcard) => creditcard.id)
  creditcards_id: CreditCards;
  
  @ManyToOne(() => Products, (product) => product.id)
  products_id: Products;
}