package lambda.ex1;

import lambda.MyFunction;

public class M5Return {

    public static MyFunction getOperator(String operator) {
        switch (operator) {
            case "add":
                return (a, b) -> a + b;
            case "sub":
                return (a, b) -> a - b;
            default:
                return (a,b) -> 0;
        }
    }

    static void main() {
        MyFunction result1 = getOperator("add");
        System.out.println("add(1, 2) = " + result1.apply(1,2));
        MyFunction result2 = getOperator("sub");
        System.out.println("sub(1, 2) = " + result2.apply(1,2));
        MyFunction result3 = getOperator("xxx");
        System.out.println("xxx(1, 2) = " + result3.apply(1,2));
    }
}
