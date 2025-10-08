package lambda.lambda4;

import java.util.Random;
import java.util.function.Supplier;

public class SupplierMain {
    //입력을 받지 않고, 리턴만 공급해주는 역할
    static void main() {

        Supplier<Integer> supplier1 = new Supplier<Integer>() {
            @Override
            public Integer get() {
                return new Random().nextInt(10);
            }
        };

        System.out.println("supplier1 = " + supplier1.get());

        Supplier<Integer> supplier2 = () -> new Random().nextInt(10);
        System.out.println("supplier2 = " + supplier2.get());
    }
}
