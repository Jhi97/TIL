package lambda.lambda4;

import java.util.function.Consumer;

public class ConsumerMain {
    static void main() {
        //입력을 받아 소비하고 리턴을 하지 않음
        Consumer<String> consumer1 = new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println("s = " + s);
            }
        };

        consumer1.accept("Consumer Test");
    }
}
