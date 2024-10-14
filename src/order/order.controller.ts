import { Controller, Get } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "../classes/order";
import { Address } from "../classes/address";
import { CreditCard } from "../classes/creditcard";

@Controller("orders")
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    createOrder()
    {
        return this.orderService.create(new Order("example", new Address("example", "example", "example", "example", "example"), new CreditCard("XXXX-XXXX-XXXX-XXXX", "11/2024", "555"), 1));
    }
}