/** 객체 리터럴 타입 **/
let user: {
    id?: number; //? -> 있어도 되고 없어도 된다는 뜻 (Optional Property)
    name: string;
} = {
    id: 1,
    name: "TypeScript",
};

//객체인걸 정의해서 알지만, 프로퍼티의 정보 등 이외의 것은 몰라 접근 시 오류발생
let user2: object = {
    id:2,
    name: "Test",
}
//user2.id; -> 오류 발생

let config:{
    readonly apiKey: string; //readOnly -> 읽기 전용 프로퍼티
} = {
    apiKey : "My API Key"
}

//config.apiKey = "test"; //Attempt to assign to const or readonly variable