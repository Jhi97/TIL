package lambda.lambda5.mysteam;

import java.util.List;

public class MyStreamV2Main {

    static void main() {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> list = MyStream2.of(numbers)
                .filter(n -> n % 2 == 0)
                .map(n -> n * 2)
                .toList();
        System.out.println("list = " + list);
    }
}
