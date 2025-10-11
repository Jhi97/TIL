package methodref.start;

import java.util.function.BinaryOperator;

public class MethodRefStartV2 {

    static void main() {
        BinaryOperator<Integer> add1 = MethodRefStartV2::add; //(x,y) -> add(x,y)랑 같은 코드
        BinaryOperator<Integer> add2 = MethodRefStartV2::add;

        Integer result1 = add1.apply(1, 2);
        System.out.println("result1 = " + result1);

        Integer result2 = add2.apply(2, 3);
        System.out.println("result2 = " + result2);
    }

    static int add(int x, int y) {
        return x + y;
    }
}
