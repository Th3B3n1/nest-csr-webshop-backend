import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Orders } from "../entities/orders.entity";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { Products } from "src/entities/products.entity";
import { Addresses } from "src/entities/addresses.entity";
import { CreditCards } from "src/entities/creditcards.entity";
import { ProductService } from "src/product/product.service";

@Module({
    imports: [TypeOrmModule.forFeature([Products, Orders, Addresses, CreditCards])],
    providers: [OrderService, ProductService],
    controllers: [OrderController]
})

export class OrderModule {}