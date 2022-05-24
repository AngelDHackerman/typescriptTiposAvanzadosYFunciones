    // Aqui tendremos todo lo que es tipado.

import { Product } from "../products/product.model";
import { User } from "../users/user.model";
import { BaseModel } from "../base.model";

export interface Order extends BaseModel{
  products: Product[];
  user: User;
}
