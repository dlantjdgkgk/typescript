/**
 * Let's make a calculator 🧮
 */

type Method = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(method: Method, a, b): number | undefined {
    if (method === 'add') return a + b;
    if (method === 'substract') return a - b;
    if (method === 'multiply') return a * b;
    if (method === 'divide') return a / b;
    if (method === 'remainder') return a % b;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
