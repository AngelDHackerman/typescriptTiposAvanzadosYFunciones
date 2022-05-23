// Nico => [N,i,c,o] => string => string[];
// [N,i,c,o] => Nico => string => string;

// ! La sobrecarga de funciones solo funciona con las que comienza con 'funtion' no con las que comienzan con 'const'

// * Estas de abajo son las sobrecargas:

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr (input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// };

export function parseStr (input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
};

const rtaArray = parseStr('Angel');
rtaArray.reverse();
console.log('rtaArray:', rtaArray);

const rtaStr = parseStr(['A','n','g','e','l']);
rtaStr.toLocaleLowerCase();
console.log('rtaStr:', rtaStr);

const rtaBoolean = parseStr(12);
console.log('rtaBoolean:', rtaBoolean);
