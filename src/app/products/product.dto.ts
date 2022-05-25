import { Product } from '../products/product.model'

// ? Omit, omite los campos del DTO (data transfer object). Esto avita que se genere el 'id', 'createdAt', etc...
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// ? Pick, es el contrario de Omit, este elige que valores vamos a transferir.

type example = Pick<Product, 'color' | 'description'>;



// ? Partial, pone todos opciones de tipado como opcionales "name?: 'juanito'"
export interface UpdateProductDto extends Partial<CreateProductDto> {

}

// ? Required, hace que todas las opciones de tipado sean REQUERIDAS

type example2 = Required<Product>;



export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

// ? Readonly, hace que todas las opciones de tipado sean READONLY

type example3 = Readonly<Product>;
