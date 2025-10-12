package lambda.lambda5.mysteam;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

// Generic 추가
public class MyStream3<T> {

    private List<T> internalList;

    private MyStream3(List<T> internalList) {
        this.internalList = internalList;
    }
    // static factory
    public static <T> MyStream3<T> of(List<T> internalList) {
        return new MyStream3<>(internalList);
    }
    public MyStream3<T> filter(Predicate<T> predicate) {
        List<T> filtered = new ArrayList<>();
        for (T element : internalList) {
            if (predicate.test(element)) {
                filtered.add(element);
            }
        }
        return MyStream3.of(filtered);
    }
    public <R> MyStream3<R> map(Function<T, R> mapper) {
        List<R> mapped = new ArrayList<>();
        for (T element : internalList) {
            mapped.add(mapper.apply(element));
        }
        return MyStream3.of(mapped);
    }
    public List<T> toList() {
        return internalList;
    }

    //추가
    public void forEach(Consumer<T> consumer) {
        for (T element : internalList) {
            consumer.accept(element);
        }
    }

    // 추가
    public T getFirst() {
        return internalList.get(0);
    }
}
