// ! la diferencia entre un type y un interface, es que el interfacer se puede extender.

type Size = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Size;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'producto 1',
  createAt: new Date(),
  stock: 90,
})


const addProduct = (data: Product) => {
  products.push(data);
}
