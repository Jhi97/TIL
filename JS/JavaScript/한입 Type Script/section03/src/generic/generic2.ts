/**
 * Map 메서드
 */
import {it} from "node:test";

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T>(arr: T[], callback: (item: T) => T){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());


/**
 * forEach
 */

let arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr:T[], callback: (item: T) => void){
    for (let i = 0; arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (it)=>{
    console.log(it.toFixed());
})