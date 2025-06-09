/**
 * infer
 */

type funcA = () => string;
type funcB = () => number;

type ReturnType<T> = T extends () => string ? string : never;
type ReturnTypeInfer<T> = T extends () => infer R ? R : never;

type A = ReturnType<funcA>;
type B = ReturnType<funcB>;

type C = ReturnTypeInfer<funcA>;
type D = ReturnTypeInfer<funcB>;
type E = ReturnTypeInfer<number>; //never

/**
 * EX 1
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//1. T는 프로미스 타입이어야 한다.
//2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
//number

type PromiseB = PromiseUnpack<Promise<string>>;