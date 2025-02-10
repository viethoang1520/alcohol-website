import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./product.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) { }
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductByID(@Param('id') id: number) {
    return this.productService.getProductByID(id);
  }
}