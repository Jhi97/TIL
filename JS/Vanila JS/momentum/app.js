const a = 5;
const b = 2;
let myName = "Jeon";

//const는 constance(상수), 값이 바뀔 수 없음

myName = "Hyeongil";

console.log("your new name is " + myName);


//boolean
const bool = true;
//null
const some = null;
//undefined
let something;

console.log(bool, some, something);

/**** Array ****/
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);


/**** Object ****/
const player = {
    //property
    name:"Jeon",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name); // == player["name"]

player.fat = false; // 객체 자체가 const 일 뿐, 객체 내부의 값은 변경 가능