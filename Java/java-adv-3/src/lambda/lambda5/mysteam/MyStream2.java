package lambda.lambda5.mysteam;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

//static factory 추가
public class MyStream2 {

    private List<Integer> internalList;

    //기본 생성자 막음 - factory 사용하여 생성하도록 유도
    private MyStream2(List<Integer> internalList) {
        this.internalList = internalList;
    }

    //static factory
    public static MyStream2 of(List<Integer> internalList) {
        return new MyStream2(internalList);
    }

    public MyStream2 filter(Predicate<Integer> predicate) {
        List<Integer> filtered = new ArrayList<>();
        for (Integer element : internalList) {
            if (predicate.test(element)) {
                filtered.add(element);
            }
        }
        return new MyStream2(filtered);
    }

    public MyStream2 map(Function<Integer, Integer> mapper) {
        List<Integer> mapped = new ArrayList<>();
        for (Integer element : internalList) {
            mapped.add(mapper.apply(element));
        }

        return new MyStream2(mapped);
    }

    public List<Integer> toList() {
        return internalList;
    }
}
