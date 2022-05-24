import faker from '@faker-js/faker';

import { addProduct } from "./products/product.service";

addProduct({
  id: faker.faker.datatype.uuid(),
  title: faker.faker.commerce.productName(),
  createdAt: faker.faker.date.recent(),
  updatedAt: faker.faker.date.recent(),
  stock: faker.faker.datatype.number({min: 10, max: 100, precision: 0.01}),
  category: {
    id: faker.faker.datatype.uuid(),
    name: faker.faker.commerce.department(),
    createdAt: faker.faker.date.recent(),
    updatedAt: faker.faker.date.recent(),
  }
})
