/**
 * 조건부 타입
 */
type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; //string 타입
let varB: StringNumberSwitch<string>; //number 타입

function removeSpace<T>(text: T): T extends string ? string : undefined{
    if(typeof text === "string") {
        return text.replaceAll(" ", "") as any;
    } else {
        return undefined as any;
    }
}

let result = removeSpace("hi im test");