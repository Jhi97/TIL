package lambda.lambda5.mysteam;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class MyStream1 {

    private List<Integer> internalList;

    public MyStream1(List<Integer> internalList) {
        this.internalList = internalList;
    }

    public MyStream1 filter(Predicate<Integer> predicate) {
        List<Integer> filtered = new ArrayList<>();
        for (Integer element : internalList) {
            if (predicate.test(element)) {
                filtered.add(element);
            }
        }
        return new MyStream1(filtered);
    }

    public MyStream1 map(Function<Integer, Integer> mapper) {
        List<Integer> mapped = new ArrayList<>();
        for (Integer element : internalList) {
            mapped.add(mapper.apply(element));
        }

        return new MyStream1(mapped);
    }

    public List<Integer> toList() {
        return internalList;
    }
}
