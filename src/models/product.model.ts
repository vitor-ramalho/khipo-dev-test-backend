import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductModel {
  @CreateDateColumn({default: new Date()})
  createdAt: Date;
  @Column()
  name: string;
  @Column("decimal", { precision: 5, scale: 2 })
  price: number;
  @Column()
  brand: string;
  @Column()
  image: string;
  @PrimaryGeneratedColumn()
  id: number;
}
