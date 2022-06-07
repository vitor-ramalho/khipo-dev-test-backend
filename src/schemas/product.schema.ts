import { IsString } from 'class-validator';

export class ProductSchema {
  @IsString()
  name: string;
  price: number;
  @IsString()
  brand: string;
  @IsString()
  image: string;
}
