import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Orders } from "src/entities/orders.entity";
import { Order } from "../classes/order";
import { CreditCards } from "src/entities/creditcards.entity";
import { Addresses } from "src/entities/addresses.entity";
import { ProductService } from "src/product/product.service";

@Injectable()
export class OrderService 
{
    constructor(
        @InjectRepository(Orders)
        private orderRepository: Repository<Orders>,
        @InjectRepository(Addresses)
        private addressesRepository: Repository<Addresses>,
        @InjectRepository(CreditCards)
        private creditcardsRepository: Repository<CreditCards>,
        private productsService: ProductService
    ) {}

    findAll(): Promise<Orders[]>
    {
        return this.orderRepository.find();
    }

    findOne(id: number): Promise<Orders | null>
    {
        return this.orderRepository.findOneByOrFail({id});
    }

    async create(order: Order)
    {
        let newAddress = this.addressesRepository.create({
            country: order.Address.Country,
            zipcode: order.Address.ZipCode,
            city: order.Address.City,
            street: order.Address.Street,
            building_number: order.Address.BuildingNumber
        })
        let address = await this.addressesRepository.save(newAddress);
        let newCreditCard = this.creditcardsRepository.create({
            number: order.CreditCard.Number,
            expiry_date: order.CreditCard.ExpiryDate,
            cvc: order.CreditCard.CVC
        })
        let creditcard = await this.creditcardsRepository.save(newCreditCard);
        console.log(address.id)
        console.log(creditcard.id)
        let product = await this.productsService.findOne(order.ProductId);
        console.log(product)
        let newOrder = this.orderRepository.create({
            name: order.Name,
            cuponcode: order.CuponCode,
            addresses_id: address,
            creditcards_id: creditcard,
            products_id: product
        });
        return this.orderRepository.save(newOrder);
    }
    
}