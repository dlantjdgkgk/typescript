//constrain 억압하다 타입을 제한시키다.

interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }
    workFullTime() {}
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);
    }
    workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// employee를 확장한 것만 가능하게 만들었다.
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

new Array

// new 연산자를 통하여 생성자를 호출해서 객체를 만듬
const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
    name: 'ellie',
    age: 20,
};

const obj2 = {
    animal: '🐕',
};

// obj에 들어가있는 키만 가능하다.
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
