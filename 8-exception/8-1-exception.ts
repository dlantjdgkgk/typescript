// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// error는 예상 가능 but exception은 예상 불가능

// Error(Exception) Handling: try -> catch -> finally
// try 에러가 발생할 수 있는 부분을 시도
// catch 에러가 발생한다면 잡는다
// try가 성공하든 실패하든 catch가 호출되든 안되든  finally를 호출된다.

function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents🗒';
}

function closeFile(fileName: string) {
    //
}
function run() {
    const fileName = 'not  exist!💩';

    try {
        console.log(readFile(fileName));
    } catch (error) {
        console.log(`catched!!`);
        return; // return을 해도 finally는 호출된다. return을 했을 때 finally말고 밑에 코드를 작성했으면
        //return으로 인해 밑의 코드는 실행되지 않는다.
    } finally {
        closeFile(fileName);
        console.log(`closed!`);
    }
}
run();
