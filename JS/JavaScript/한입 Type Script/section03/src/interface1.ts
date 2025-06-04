/**
 * 인터페이스
 */

interface Person {
    readonly name:string;
    age?:number;
    sayHi() :void;
    sayHi(a:number, b:number): void; // 호출 시그니처로 선언하면 오버로딩 구현 가능
}



const person: Person = {
    name: "전형일",
    sayHi: function () {
        console.log("hi");
    }
};

/**
 * 인터페이스 확장, 자바의 상속과 동일
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal{
    isBark: boolean;
}

interface Cat extends Animal{
    isScratch: boolean;
}

interface DogCat extends Dog, Cat {
    name: "";
    color: "";
    isBark: true;
    isScratch: true;
}

/**
 * 인터페이스 선언 합침
 * type은 중복된 이름이 불가하나, interface는 선언이 합쳐짐
 */
interface Test {
    name: string;
}

interface Test {
    //name: number; 충돌되어 선언 불가
    age: number;
}

const Test2: Test ={
    name: "",
    age : 27,
}
