
// todo: Si es necesario usar un tipo ANY es mejor usar un UNKNOWN porque eso te va a obligar a verificar los tipados

// Ejemplo de como trabaja el tipo: any
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;  // Any acepta todo tipo de datos.

// anyVar.doSomething();   //* NO demuestra ningun tipado y TS NO muetra ningun error!
// anyVar.touppercase();



      // ? Tipo Unknown

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();  // * Esto no va a funcionar porque si nos detecta el tipado.
if ( typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}

