package stream.operation;

import java.util.Optional;

public class OptionalSimpleMain {

    static void main() {
        Optional<Integer> optional1 = Optional.of(10);
        System.out.println("optional1 = " + optional1);
        if (optional1.isPresent()) {
            // 값이 있는지 확인할 수 있는 메서드 제공
            Integer integer = optional1.get();
            System.out.println("integer = " + integer);
        }

        Optional<Object> optional2 = Optional.ofNullable(null);
        if (optional2.isPresent()) {
            Object o = optional2.get();
            System.out.println("o = " + o);
        }
        //Optional이 값이 없는 상태에서 get() 호출 시 NullPointerException 발생
        Object o2 = optional2.get();
        System.out.println("o2 = " + o2);
    }
}
