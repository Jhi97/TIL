/**
 * 제네릭 인터페이스
 */

interface KeyPair<K,V>{
    key:K;
    value:V;
}

let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 0,

}

/**
 * 인덱스 시그니처
 */
interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> ={
    key:"value",
}

let booleanMap: Map<boolean> = {
    key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> ={
    [key: string]: V;
}

let stringMap2: Map2<string> ={
    key: "hello",
}

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저/ 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name:string;
    profile : T;
}

function goToSchool(user: User<Student>) {
    let school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser : User<Developer> = {
    name: "전0일",
    profile: {
        type: "developer",
        skill: "Nexacro, Oracle, BizActor",

    }
}

const studentUser : User<Student> = {
    name : "테스트",
    profile: {
        type: "student",
        school:"한국방송통신대학교"
    }
}