package lambda.ex1;

import lambda.Procedure;

import java.util.Arrays;

public class M3MeasureTime {

    //공통: 실행 시간 측정 메서드
    public static void measure(Procedure procedure) {
        long startNs = System.nanoTime();

        procedure.run();

        long endNs = System.nanoTime();
        System.out.println("실행 시간: " + (endNs-startNs) + "ns");

    }

    static void main() {
        measure(()-> {
            int N = 100;
            long sum = 0;
            for (int i = 1; i <= N; i++) {
                sum += i;
            }
            System.out.println("[1부터 100까지의 합] 결과: " + sum);
        });

        measure(() -> {
            int[] arr = {4, 3, 2, 1};
            System.out.println("원본 배열: " + Arrays.toString(arr));
            Arrays.sort(arr);
            System.out.println("배열 정렬: " + Arrays.toString(arr));
        });
    }
}
