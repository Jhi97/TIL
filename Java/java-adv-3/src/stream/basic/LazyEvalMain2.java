package stream.basic;

import lambda.lambda5.mysteam.MyStream3;

import java.util.List;

public class LazyEvalMain2 {
    static void main() {
        List<Integer> data = List.of(1, 2, 3, 4, 5, 6);
        ex1(data);
        ex2(data);
    }
    //내가 만든 Stream, filter가 끝나고 map 시작
    private static void ex1(List<Integer> data) {
        System.out.println("== MyStream3 시작 ==");
        MyStream3.of(data)
                .filter(i -> {
                    boolean isEvan = i % 2 == 0;
                    System.out.println("filter() 실행: " + i + "(" + isEvan + ")");
                    return isEvan;
                })
                .map(i -> {
                    int mapped = i * 10;
                    System.out.println("map() 실행 " + i + " -> " + mapped);
                    return mapped;
                });
        //System.out.println("result = " + result);
    }

    //Java 제공 Stream, filter 되자마자 map 수행 다시 filter -> map 반복
    /* 최종 연산이 호출되지 않음에, 지연연산에 의해 연산이 되지 않아 자원소모가 없음 */
    private static void ex2(List<Integer> data) {
        System.out.println("== Stream API 시작 ==");
        data.stream()
                .filter(i -> {
                    boolean isEvan = i % 2 == 0;
                    System.out.println("filter() 실행: " + i + "(" + isEvan + ")");
                    return isEvan;
                })
                .map(i -> {
                    int mapped = i * 10;
                    System.out.println("map() 실행 " + i + " -> " + mapped);
                    return mapped;
                });
        //System.out.println("result = " + result);
    }
}
