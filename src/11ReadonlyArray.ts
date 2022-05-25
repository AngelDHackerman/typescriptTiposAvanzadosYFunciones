// todo: ReadonlyArray, permite solo los metodos que NO MUTAN al array original.

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(90);
// numbers.pop();
// numbers.unshift(1);
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0)
