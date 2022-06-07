import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "src/controllers/product.controller";
import { ProductModel } from "src/models/product.model";

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [ProductController],
})

export class ProductModule{}