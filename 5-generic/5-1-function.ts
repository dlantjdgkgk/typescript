// generic 같은 경우는 공식 문서를 볼 떄 알아두면 좋다.
//한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용된다. 재사용성이 높은 함수와 클래스를 생성할 수 있다.
// 여러 타입에서 동작이 가능하다. (한 번의 선언으로 다양한 타입에 재사용할 수 있다.)

{
    // 이와 같이 arg : number로하면 arg 값마다 함수를 다르게 만들어줘야 한다.
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    // any를 써서 나쁜 경우이다.
    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNullAnyBad(123);

    // 그래서 나온 게 generic 함수이다.
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}
