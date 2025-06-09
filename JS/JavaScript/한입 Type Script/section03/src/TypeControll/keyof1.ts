/**
 * keyof 연산자
 */

interface Person {
    name : string;
    age : number
}

/*keyof - 해당 타입의 프로퍼티를 union 타입으로 추출*/
function getPropertyKey(person:Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "두잇",
    age:27,
}

getPropertyKey(person, "name");