package lambda.lambda4;

public class RunnableMain {

    static void main() {
        //입력 및 출력이 없음 (주로 멀티스레딩에서 스레드의 작업정의 할때 사용
        Runnable runnable1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("Hello Runnable1");
            }
        };
        runnable1.run();

        Runnable runnable2 = () -> System.out.println("Hello Runnable2");
        runnable2.run();

    }
}
