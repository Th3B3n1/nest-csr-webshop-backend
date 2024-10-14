import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "../entities/products.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService 
{
    constructor(
        @InjectRepository(Products)
        private productRepository: Repository<Products>,
    ) {}

    findAll(): Promise<Products[]>
    {
        return this.productRepository.find();
    }

    findOne(id: number): Promise<Products | null>
    {
        return this.productRepository.findOneByOrFail({id});
    }
}