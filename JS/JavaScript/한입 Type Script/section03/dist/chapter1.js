/**
 * 대수
 * -> 합집합 타입과 교집합 타입이 존재
 * */
/**
 * 1. 합집합 - Union 타입
 * */
let a;
a = 1;
a = "hello";
let union1 = {
    name: "",
    color: ""
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
/* 오류 발생 - Dog 타입, Person 타입에도 포함되지 않음 */
// let union4: Union1 = {
//     name:"",
// }
/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable; //겹치는게 없어서 never 타입
let intersection1 = {
    name: "",
    color: "",
    language: "",
};
export {};
