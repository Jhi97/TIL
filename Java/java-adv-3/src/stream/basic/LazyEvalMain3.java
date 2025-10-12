package stream.basic;

import lambda.lambda5.mysteam.MyStream3;

import java.util.List;

public class LazyEvalMain3 {
    static void main() {
        List<Integer> data = List.of(1, 2, 3, 4, 5, 6);
        ex1(data);
        ex2(data);
    }
    //내가 만든 Stream, filter가 끝나고 map 시작
    private static void ex1(List<Integer> data) {
        System.out.println("== MyStream3 시작 ==");
        Integer result = MyStream3.of(data)
                .filter(i -> {
                    boolean isEvan = i % 2 == 0;
                    System.out.println("filter() 실행: " + i + "(" + isEvan + ")");
                    return isEvan;
                })
                .map(i -> {
                    int mapped = i * 10;
                    System.out.println("map() 실행 " + i + " -> " + mapped);
                    return mapped;
                })
                .getFirst();
        System.out.println("result = " + result);
    }

    //Java 제공 Stream, filter 되자마자 map 수행 다시 filter -> map 반복
    private static void ex2(List<Integer> data) {
        System.out.println("== Stream API 시작 ==");
        Integer result = data.stream()
                .filter(i -> {
                    boolean isEvan = i % 2 == 0;
                    System.out.println("filter() 실행: " + i + "(" + isEvan + ")");
                    return isEvan;
                })
                .map(i -> {
                    int mapped = i * 10;
                    System.out.println("map() 실행 " + i + " -> " + mapped);
                    return mapped;
                })
                .findFirst().get();
        System.out.println("result = " + result);
    }
}
