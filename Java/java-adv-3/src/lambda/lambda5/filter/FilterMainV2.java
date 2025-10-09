package lambda.lambda5.filter;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class FilterMainV2 {
    static void main() {

        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        //짝수만 거르기
        List<Integer> evenNumbers = filter(numbers, n -> n % 2 == 0);
        System.out.println("evenNumbers = " + evenNumbers);

        //홀수만 거르기
        List<Integer> oddNumbers = filter(numbers, n -> n % 2 == 1);
        System.out.println("oddNumbers = " + oddNumbers);
    }

    private static List<Integer> filter(List<Integer> numbers, Predicate<Integer> evenFilter) {
        List<Integer> resultList = new ArrayList<>();

        for (Integer number : numbers) {
            boolean testResult = evenFilter.test(number);
            if (testResult) {
                resultList.add(number);
            }
        }

        return resultList;
    }


}
