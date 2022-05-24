    // Aqui tendremos todo lo que es tipado.

import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
  category: Category; // * En lugar de hacer un objeto anidado creamos un modulo en category.
}

