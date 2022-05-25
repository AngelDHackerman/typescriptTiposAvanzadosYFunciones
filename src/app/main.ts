import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    // id: faker.database.mongodbObjectId(), //
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: 'M',
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.words(),
    title: faker.commerce.productName(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid(),
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // }
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts ({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
})
