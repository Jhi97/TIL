package lambda.lambda1;

public class LambdaSimple4 {

    static void main() {
        MyCall call1 = (int value)-> value * 2; //기본
        MyCall call2 = (value) -> value * 2; //타입 추론
        MyCall call3 = value -> value * 2;//매개변수 1개인경우, () 생략 가능

        System.out.println("call1 = " + call1.call(1));
        System.out.println("call2 = " + call2.call(2));
        System.out.println("call3 = " + call3.call(3));

    }

    interface MyCall {
        int call(int value);
    }
}
