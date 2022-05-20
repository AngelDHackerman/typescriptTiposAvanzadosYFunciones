      // ? Tupla generica:

const prices : (number | string ) [] = [1,2,3,4, 'as'];
prices.push(234);
prices.push('hola');
prices.push(2934);
prices.push('adios');


console.log(prices);


      // ? Tupla con valores tipados y limitados:

let user: [string, number, boolean];
// user = ['Hackerman', '29'];  // * no tiene los 3 valores
// user = [12, 143, true]   // * el primer valor NO es un string

user = ['Hackerman', 26, false];    // ? Este si funciona, solo tiene 3 valores y estan el order definido



      // ? Destructurando las tuplas (podemos usar solo 1 o 2 de los tipos que definimos en la tupla)

const [username, age] = user; // ! el primer valor ser STRING y el segundo ser un NOMBER, que vienen de la tupla user
console.log(username);
console.log(age);
