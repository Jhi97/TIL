package lambda.lambda3;

import java.util.function.Function;

// 자바가 기본으로 제공하는 Function
public class TargetType2 {
    static void main() {
        Function<String, String> upperCase = s -> s.toUpperCase();
        String result1 = upperCase.apply("hello");
        System.out.println("result1 = " + result1);

        Function<Integer, Integer> square = n -> n * n;
        Integer result2 = square.apply(10);
        System.out.println("result2 = " + result2);
    }
}
