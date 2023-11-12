import { Product } from "./product.interface";

export type ProductWithoutId = Omit<Product, 'id'> 