// Nico => [N,i,c,o] => string => string[];
// [N,i,c,o] => Nico => string => string;

// ! La sobrecarga de funciones solo funciona con las que comienza con 'funtion' no con las que comienzan con 'const'

function parseStr (input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
};

const rtaArray = parseStr('Angel');
console.log('rtaArray:', rtaArray);

const rtaStr = parseStr(['A','n','g','e','l']);
console.log('rtaStr:', rtaStr);


