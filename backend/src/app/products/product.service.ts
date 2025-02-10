import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "src/entities/product.entity";

export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }
  getAllProducts() {
    return this.productRepository.find();
  }

  getProductByID(id: number) {
    return this.productRepository.findOneBy({ productID: id });
  }
}