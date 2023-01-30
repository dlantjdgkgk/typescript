// 17. strict mode를 쓰는 이유
// 암묵적 전역을 예방
// 변수, 함수, 매개변수의 삭제
// 매개변수 이름의 중복을 막을 수 있다.



const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    /* this.makeCoffee = shots => {
    console.log('making... ☕️');
  }; */
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making... ☕️');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
