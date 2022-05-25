import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  // El Id es generado por la base de datos, pero aqui lo haremos nosotros:
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
}


export const updateProduct = (id: string, changes: Product ) => {
  // code
}
