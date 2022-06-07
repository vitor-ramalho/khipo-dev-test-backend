import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductModel } from 'src/models/product.model';
import { ProductSchema } from 'src/schemas/product.schema';
import { Repository } from 'typeorm';

@Controller('/product')
export class ProductController {
  constructor(
    @InjectRepository(ProductModel) private model: Repository<ProductModel>,
  ) {}
  @Post()
  public async create(
    @Body() body: ProductSchema,
  ): Promise< ProductModel> {
    return this.model.save(body);
  }
  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProductModel> {
    const product = await this.model.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Produto não foi encontrado');
    return  product;
  }
  @Get()
  public async getAll(): Promise<ProductModel[]> {
    const products = await this.model.find();
    return products ;
  }
  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ProductSchema,
  ): Promise<string> {
    const product = await this.model.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Produto não foi encontrado');
    await this.model.update({ id }, body);
    return `Successfull updated - Product ID: ${id}` ;
  }
  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<string> {
    const product = await this.model.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Produto não foi encontrado');
    await this.model.delete(id);
    return `Successfull deleted - Product ID: ${id}`;
  }
}
