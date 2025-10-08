package lambda.lambda3;

public class TargetType1 {

    public static void main() {
        //람다 직접 대입: 문제 없음
        FunctionA functionA = i -> "value = " + i;
        FunctionB functionB = i -> "value = " + i;

        // 이미 만들어진 FunctionA 인스턴스를 Function에 대입
//        FunctionB targetB = functionA; // 컴파일 오류
        /// 이래서 자바가 기본으로 제공하는 함수형 인터페이스가 있음 Function<T,R>
    }

    @FunctionalInterface
    interface FunctionA {
        String apply(Integer i);
    }
    @FunctionalInterface
    interface FunctionB {
        String apply(Integer i);
    }



}
