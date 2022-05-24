import faker from '@faker-js/faker';

import { addProduct } from "./products/product.service";

addProduct({
  id: faker.faker.datatype.uuid(),
  description: faker.faker.commerce.productDescription(),
  image: faker.faker.image.imageUrl(),
  color: '#eee',
  price: parseInt(faker.faker.commerce.price(), 10),
  isNew: faker.faker.datatype.boolean(),
  tags: ['hola', 'estos', 'son', 'tags'],
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

