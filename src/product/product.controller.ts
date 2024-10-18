import { Controller, Get, Render } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    @Render("products")
    async getProducts()
    {
        return {currentPath: "/products", products: await this.productService.findAll()};
    }
}