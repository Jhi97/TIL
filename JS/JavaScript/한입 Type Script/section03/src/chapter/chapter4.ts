/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Pserson = {
    name: string;
    age: number;
}


// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func(value: number | string | Date | null | Pserson) {
    if (typeof value === "number") {
        console.log(value.toFixed())
        //value 가 number로 추론됨
    } else if (typeof value === "string") {
        console.log(value.toUpperCase())
        //value 가 string으로 추론됨
    }
    // Date객체만 들어오면 상관 없으나, 매개변수로 null이 들어오면 오류발생
    // instanceof 로 타입 가드 수행 필요
    // else if (typeof value === 'object') {
    //     console.log(value.getTime())
    // }
    else if (value instanceof Date) {
        console.log(value.getTime())
    }
    //type은 class가 아니므로, 인스턴스인지 여부를 판단 할 수 없음
    // 이때 in 으로 타입 가드
    //else if (value instanceof Pserson)

    else if ( value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
}