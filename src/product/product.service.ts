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

    async findAll(): Promise<Products[]>
    {
        return await this.productRepository.find();
    }

    async findOne(id: number): Promise<Products | null>
    {
        return await this.productRepository.findOneByOrFail({id});
    }
}