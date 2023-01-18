{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */

    //TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있다.
    // 명시적인 정적 타입 지정은 개발자의 의도를 명확하게 코드로 기술할 수 있다.
    // 이는 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅을 쉽게 한다.

    // number
    const num: number = -6;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // 💩
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 💩

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while (true) {}
    }
    let neverEnding: never; // 💩

    // objet
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
}
