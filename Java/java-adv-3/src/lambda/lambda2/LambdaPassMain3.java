package lambda.lambda2;

import lambda.MyFunction;

public class LambdaPassMain3 {

    static void main() {
        MyFunction add = getOperation("add");
        System.out.println("add.apply(1,2) = " + add.apply(1, 2));
        MyFunction sub = getOperation("sub");
        System.out.println("sub.apply(1,2) = " + sub.apply(1, 2));
        MyFunction test = getOperation("test");
        System.out.println("test.apply(1,2) = " + test.apply(1, 2));
    }

    static MyFunction getOperation(String operation) {
        switch (operation) {
            case "add" :
                return (a, b) -> a + b;
            case "sub":
                return (a,b) -> a - b;
            default:
                return (a, b) -> 0;
        }
    }
}
