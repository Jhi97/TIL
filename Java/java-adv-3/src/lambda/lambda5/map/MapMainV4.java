package lambda.lambda5.map;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.function.Function;

public class MapMainV4 {

    static void main() {
        List<String> list = List.of("apple", "banana", "orange");

        List<String> upperFruits = GenericMapper.map(list, s -> s.toUpperCase());
        System.out.println("upperFruits = " + upperFruits);

        List<Integer> lengthFruits = GenericMapper.map(list, s -> s.length());
        System.out.println("lengthFruits = " + lengthFruits);

        List<Integer> integers = List.of(1, 2, 3);
        List<String> starList = GenericMapper.map(integers, n -> "*".repeat(n));
        System.out.println("starList = " + starList);
    }
}
