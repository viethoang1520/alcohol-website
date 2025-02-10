import { Module } from "@nestjs/common";
import { ProductsService } from "./product.service";
import { ProductsController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/entities/product.entity";
import { CartItem } from "src/entities/cart-item.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Product, CartItem])],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService]
})
export class ProductsModule {}