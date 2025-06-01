// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => {
    return a + b;
};
/**
 * 함수 매개변수
 */
function introduce(name = "Jeon", tall) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
}
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum(1, 2, 3);
export {};
