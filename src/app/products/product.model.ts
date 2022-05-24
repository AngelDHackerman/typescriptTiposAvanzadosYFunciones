    // Aqui tendremos todo lo que es tipado.

import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {    // extends BaseModel, esto le va agregar todas las propiedades de BaseModel al Product model. (Esto es la herencia)
  title: string;
  stock: number;
  size?: Sizes;
  category: Category; // En lugar de hacer un objeto anidado creamos un modulo en category.
}

