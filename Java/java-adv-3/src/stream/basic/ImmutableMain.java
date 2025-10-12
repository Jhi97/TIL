package stream.basic;

import java.util.List;

public class ImmutableMain {

    static void main() {
        List<Integer> originList = List.of(1,2,3,4);
        System.out.println("originList = " + originList);

        List<Integer> filteredList = originList.stream()
                .filter(n -> n % 2 == 0)
                .toList();
        System.out.println("filteredList = " + filteredList);

    }
}
