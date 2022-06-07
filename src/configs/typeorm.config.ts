import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ProductModel } from 'src/models/product.model';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'dev-test',
  entities: [ProductModel],
  synchronize: true,
};
