package lambda.lambda5.mysteam;

import lambda.lambda5.filter.GenericFilter;
import lambda.lambda5.map.GenericMapper;

import java.util.ArrayList;
import java.util.List;

public class Ex1_Number {

    static void main() {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> directResult = direct(numbers);
        System.out.println("directResult = " + directResult);

        List<Integer> lambdaResult = lambda(numbers);
        System.out.println("lambdaResult = " + lambdaResult);
    }

    private static List<Integer> direct(List<Integer> numbers) {
        List<Integer> result = new ArrayList<>();
        for (Integer number : numbers) {
            if (number % 2 == 0) {
                result.add(number * 2);
            }
        }
        return result;
    }

    private static List<Integer> lambda(List<Integer> numbers) {
        List<Integer> filteredList = GenericFilter.filter(numbers, n -> n % 2 == 0);
        return GenericMapper.map(filteredList, n -> n * 2);
    }
}
