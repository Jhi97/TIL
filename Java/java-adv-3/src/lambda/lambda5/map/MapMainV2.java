package lambda.lambda5.map;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class MapMainV2 {

    static void main() {
        List<String> list = List.of("1", "12", "123", "1234");

        //문자열을 숫자로 변환
        List<Integer> numbers = map(list, s -> Integer.valueOf(s));
        System.out.println("numbers = " + numbers);

        //문자열의 길이
        List<Integer> lengths = map(list, s -> s.length());
        System.out.println("lengths = " + lengths);
    }

    public static List<Integer> map (List<String> list, Function<String, Integer> function) {
        List<Integer> numbers = new ArrayList<>();
        for (String s : list) {
            Integer result = function.apply(s);
            numbers.add(result);
        }
        return numbers;
    }
}
