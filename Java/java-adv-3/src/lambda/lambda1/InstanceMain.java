package lambda.lambda1;

import lambda.Procedure;

public class InstanceMain {
    static void main() {
        Procedure procedure1 = new Procedure() {
            @Override
            public void run() {
                System.out.println("hello! lambda");
            }
        };
        System.out.println("class.class = " + procedure1.getClass());
        System.out.println("class.instance = " + procedure1);


        Procedure procedure2 = () -> {
            System.out.println("hello! lambda");
        };

        System.out.println("lambda.class = " + procedure2.getClass());
        System.out.println("lambda.instance = " + procedure2);
        /* 출력 결과
        -익명클래스의 경우 $1 ~ 로 붙음
        class.class = class lamda.lamda1.InstanceMain$1
        class.instance = lamda.lamda1.InstanceMain$1@2a84aee7
        -lambda의 경우 /0x~ 로 붙음
        lambda.class = class lamda.lamda1.InstanceMain$$Lambda/0x00003ffc01042c40
        lambda.instance = lamda.lamda1.InstanceMain$$Lambda/0x00003ffc01042c40@30f39991
         */
    }
}
