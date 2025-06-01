/**
 * 함수 오버로딩
 * JS에서는 제공하지 않음
 * TS를 통해 제공
 */

// 버전들
function func(a:number):void;
function func(a: number, b: number, c: number): void;

// 구현부
function func(a: number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}
