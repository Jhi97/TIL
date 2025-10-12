package stream.start;

import java.util.List;
import java.util.stream.Stream;

public class StreamStartMain {

    static void main() {
        List<String> names = List.of("Apple", "Banana", "Berry", "Tomato");

        //"B"자로 시작하는 이름만 필터링 후 대문자로 바꿔서 리스트 수집
        Stream<String> stream = names.stream();
        List<String> result = stream.filter(name -> name.startsWith("B"))
                .map(s -> s.toUpperCase())
                .toList();
        System.out.println("result = " + result);

        System.out.println("=== 외부 반복 ===");
        for (String s : result) {
            System.out.println(s);
        }

        System.out.println("=== 내부 반복 ===");
        names.stream()
                .filter(name -> name.startsWith("B"))
                .map(String::toUpperCase)
//                .forEach(s -> System.out.println("name = " + s));
                .forEach(System.out::println);
    }
}
