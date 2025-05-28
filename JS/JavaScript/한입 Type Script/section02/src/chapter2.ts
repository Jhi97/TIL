/** 배열 **/
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "human"];

let boolArr: Array<boolean> = [true, false, false];

/** 배열에 들어가는 요소들의 타입이 다양할 경우 **/
let multiArr: (number|string)[] = [1, "hello"];

/** 다차원 배열의 타입을 정의하는 방법 **/
let doubleArr: number[][] = [
    [1, 2, 3]
    , [4, 5]
];

//튜플
//길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];
//tup1 = [1, 2, 3]; -> 길이를 넘어서 저장 불가
//tup = ["string", "string"] -> 다른 자료형 데이터 저장 불가
