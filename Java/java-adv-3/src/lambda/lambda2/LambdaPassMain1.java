package lambda.lambda2;

import lambda.MyFunction;

//람다를 변수에 대입하기
public class LambdaPassMain1 {

    static void main() {
        MyFunction add = (a, b) -> a+b;
        MyFunction sub = (a, b) -> a-b;

        System.out.println("add.apply(1,2) = " + add.apply(1, 2));
        System.out.println("sub.apply(1,2) = " + sub.apply(1, 2));

        MyFunction cal = add;
        System.out.println("cal.apply(1,2) = " + cal.apply(1, 2));

        cal = sub;
        System.out.println("cal.apply(1,2) = " + cal.apply(1, 2));
    }
}
