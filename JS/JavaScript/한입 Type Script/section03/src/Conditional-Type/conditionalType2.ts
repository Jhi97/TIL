/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 이때, number 따로, string 따로 타입검사를 함
// 분산적인 조건부 타입

/**
 * EX 1
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;