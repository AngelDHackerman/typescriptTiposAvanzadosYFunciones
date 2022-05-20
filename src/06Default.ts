export const createProduct = (
  id: string | number,
  isNew: boolean = true,    // * Asi se agregan los valores por defecto.
  stock: number = 10,
) => {
  return {
    id,
    stock: stock, // * si NO le pasamos el parametro stock, por DEFECTO recibira el 10.
    isNew: isNew,
  }
};

// En javaScript los booleanos funcionan asi:
// 0 === false
// '' === false
// false === false

const p1 = createProduct (1, true, 12);
console.log(p1);

const p2 = createProduct (2);
console.log(p2);

const p3 = createProduct (1, false, 0);
console.log(p3);

const p4 = createProduct( 1, true, 100);
console.log(p4);

