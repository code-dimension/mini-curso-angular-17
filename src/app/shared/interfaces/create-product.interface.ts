import { Product } from "./product.interface";

export type CreateProduct = Omit<Product, 'id'> 