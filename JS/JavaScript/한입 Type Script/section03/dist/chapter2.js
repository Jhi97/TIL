/**
 * 타입 추론
 * */
let a = 10; // number 형으로 타입 추론됨
let b = "hello"; //string 형으로 타입 추론됨
// 매개변수 등에는 타입을 명기해줘야 함.
// function func(param) {
//
// }
let d; //초기화 시 any 타입
d = 10; //number로 타입 변경
d = "string"; //string로 타입 변경
const num = 10; // number literal 타입으로 추론됨
const str = "hello"; // string literal 타입으로 추론됨
let arr = [1, "string"]; // number|string 타입
export {};
