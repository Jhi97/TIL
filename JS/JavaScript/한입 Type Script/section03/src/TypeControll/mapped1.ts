/**
 * 맵드 타입
 * Type 에서만 사용 가능
 */
interface User {
    id: number;
    name: string;
    age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser():User {
    return {
        id: 1,
        name: "두잇",
        age: 27,
    };
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key]
};

type BooleanUser = {
    [key in keyof User] : boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key]
};


// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    //...수정하는 기능
}

updateUser({
    id:1,
    name: "두잇",
    age:23,
})