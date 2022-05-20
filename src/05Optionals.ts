export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10, // * si NO le pasamos el parametro stock, por DEFECTO recibira el 10.
    isNew: isNew ?? true,
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

const p3 = createProduct (1, false, 0); // ! Aqui hay un problema con el operador || explicitamente le pasamos false, 0 pero nos manda a la opcion de la derecha del operador Or.
console.log(p3);    // ! La forma de resolver ese problema es usando ?? en lugar de ||. con eso si nos toma la opcion que deseamos



