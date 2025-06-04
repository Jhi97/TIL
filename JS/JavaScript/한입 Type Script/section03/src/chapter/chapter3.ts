/**
 * 타입 단언
 * */

type Person = {
    name: string;
    age: number;
};

/*아래와 같이 선언 하고, 나중에 초기화 진행 시 오류 발생 */
//let person: Person = {};

/*이때 타입 단언으로 선언하면 에러 발생하지 않음*/
let person = {} as Person;
person.name = "Jeon";
person.age = 27;

type Dog = {
    name: string;
    color: string;
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    bread: "진도", //타입에 없던 프로퍼티 선언 시 타입 단언 사용
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
//let num3 = 10 as string; //A -> B 의 슈퍼타입이 아님

/**
 * const 단언
 * read only로 만들어버림
 */

let num4 = 10 as const;
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author? : string;
}

let post :Post ={
    title: "게시글",
    author: "Jeon",
}

//const len: number = post.author?.length;
// 오류발생 TS2322: Type number | undefined is not assignable to type number
// 연산자는 post.author에 값이 없을 때 점 연산자로 접근 시 오류가 발생하여
// js에서 ? 연산자로 값 없으면 undefined로 리턴하게 끔 하나, ts에서 number 타입이므로 오류 발생

// 아래와 같이 ! 연산자 (Not Null)로 값이 있음을 명기해주면 오류 발생 x
const len: number = post.author!.length;