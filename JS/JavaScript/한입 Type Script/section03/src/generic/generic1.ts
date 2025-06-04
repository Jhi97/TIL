/**
 * 제네릭
 */
//제네릭 함수
function func<T>(value:T) {
    return value;
}

let num = func(10);

let bool = func(true);
let tuple = func<[number, number, number]>([1, 2, 3]);

/**
 * Ex 1
 */
function swap<T>(a: T, b: T) {
    return [b, a];
}

//매개변수로 string, number 타입이 T로 설정되어 오류
//const [a, b] = swap("1", 2);

//아래와 같이 수정
function swap2<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap2("1", 2);

/**
 * Ex 2
 */
// function returnFirstValue<T>(data: T) {
//     return data[0]; // 어떤 값이 들어올 지 몰라 최초 unknown 타입으로 추론해서 배열접근 불가
// }
function returnFirstValue<T>(data: T[]) {
    return data[0];
}

let number = returnFirstValue([1,2,3]);

let str = returnFirstValue([1, "hello", "mynameis"]); //string|number Union 타입
// 이때, union 타입 말고 해당 배열 인덱스의 값으로 추론을 원하면 아래와 같이 설정

function returnFirstValueV2<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let number1 = returnFirstValueV2([1, "hello", "mynameis"]);
let str2 = returnFirstValueV2(["1", "hello", "mynameis"]);

/**
 * Ex 3
 */
function getLength<T extends { length: number }>(data:T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({length : 10});
//let var4 = getLength(10); // 제한하기 위한 제네릭 설정