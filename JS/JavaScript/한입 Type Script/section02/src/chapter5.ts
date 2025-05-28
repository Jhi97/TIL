// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role {
    ADMIN,
    USER,
    GUEST,
}

const User1 = {
    name: "Jeon",
    role: Role.ADMIN,
}

console.log(User1.role);