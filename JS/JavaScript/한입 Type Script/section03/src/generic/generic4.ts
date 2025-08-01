/**
 * 제네릭 클래스
 */
class List<T>{
    constructor(private list: T[]) {
        this.list = list;
    }

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3,]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["a", "b", "cc"]);
stringList.pop();
stringList.push("test");
stringList.print();