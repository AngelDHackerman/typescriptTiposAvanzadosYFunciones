// ! Never type: Se utiliza para funciones que sabes que nunca van a terminar.



const withoutEnd = () => {    // * esto es de tipo Never porque nunca va a terminar.
  while (true) {
    console.log('nunca para de aprender');
  }
};

const fail = (message: string ) => {
  throw new Error (message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) { // ? (Array.isArray(input) Asi se verifica si algo es un array
    return 'es un array';
  }
  return fail('It is not a match');
}


console.log(example('hola'));
console.log(example([1,1,1,1]));
console.log(example(1212));   // Aqui se detiene
console.log(example('Hola despues del fail'));
