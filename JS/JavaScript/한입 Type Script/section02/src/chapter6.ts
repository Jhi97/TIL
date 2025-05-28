//any 타입
//특정 변수의 타입을 우리가 확실히 모를때 (가능한 사용하지 않는 것이 좋음)
let anyVar = 10;
//anyVar = "string"; // 초기화 단계에서 10을 입력했으므로, number 타입으로 추론되어 오류

let anyType: any = 10;
anyType = "test";

//unknown
//모든 값을 할당 받을 수 있으나, 함수 호출이나 타입 정제 이전까지 활용할 수 없다.
let unknownVar: unknown;
unknownVar = 10;
let num1 : number = 20;
//num1 = num1 + unknownVar; // 오류

if (typeof unknownVar === 'number') {
    num1 = num1 + unknownVar;
}
