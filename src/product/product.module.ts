import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "../entities/products.entity";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    providers: [ProductService],
    controllers: [ProductController],
    exports: [ProductService]
})

export class ProductModule {}