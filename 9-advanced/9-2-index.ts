{
    // const obj = {
    //   name: 'ellie',
    // };
    // obj.name; // ellie
    // obj['name']; // ellie

    // type Animal = {
    //   name: string;
    //   age: number;
    //   gender: 'male' | 'female';
    // };

    // type Name = Animal['name']; // string
    // const text: Name = 'hello';

    // type Gender = Animal['gender']; //'male' | 'female'

    // type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    // const key: Keys = 'gender';

    // type Person = {
    //   name: string;
    //   gender: Animal['gender'];
    // };
    // const person: Person = {
    //   name: 'ellie',
    //   gender: 'male',
    // };
    const obj = {
        name: 'mooseong',
    };
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['gender'];

    type Keys = keyof Animal;
    const keys: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };
    const Mooseong: Person = {
        name: 'mooseong',
        gender: 'female',
    };
}
