import { Product } from '../products/product.model'

// ? Esto avita que se genere el 'id', 'createdAt', etc...

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
