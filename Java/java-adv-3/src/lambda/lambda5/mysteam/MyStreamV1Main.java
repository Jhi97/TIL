package lambda.lambda5.mysteam;

import java.util.List;

public class MyStreamV1Main {

    static void main() {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        returnValue(numbers);
        methodChain(numbers);
    }

    private static void returnValue(List<Integer> numbers) {
        MyStream1 stream = new MyStream1(numbers);
        MyStream1 filteredStream = stream.filter(n -> n % 2 == 0);
        System.out.println("filteredStream = " + filteredStream.toList());
        MyStream1 mappedStream = filteredStream.map(n -> n * 2);
        System.out.println("mappedStream = " + mappedStream.toList());
    }

    private static void methodChain(List<Integer> numbers) {
        List<Integer> list = new MyStream1(numbers)
                .filter(n -> n % 2 == 0)
                .map(n -> n * 2)
                .toList();
        System.out.println("list = " + list);
    }
}
