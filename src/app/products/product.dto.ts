import { Product } from '../products/product.model'

// ? Omit, omite los campos del DTO (data transfer object).
// ? Pick, es el contrario de Omit, este elige que valores vamos a transferir.
// ? Esto avita que se genere el 'id', 'createdAt', etc...

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

// ! Partial, pone todos opciones de tipado como opcionales "name?: 'juanito'"
export interface UpdateProductDto extends Partial<CreateProductDto> {

}
