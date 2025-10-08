package lambda.lambda3;

import java.util.function.Function;

// 자바가 기본으로 제공하는 Function 대입
public class TargetType3 {

    static void main() {
        //람다 직접 대입
        Function<Integer, String> functionA = i -> "value = " + i;
        System.out.println(functionA.apply(10));

        Function<Integer, String> functionB = functionA; //공통된 Function Interface를 사용하기 때문에 대입가능
        System.out.println(functionB.apply(10));

    }
}
