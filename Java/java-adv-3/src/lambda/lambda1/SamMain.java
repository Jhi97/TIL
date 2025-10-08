package lambda.lambda1;

public class SamMain {

    static void main() {
        SamInterface samInterface = () -> {
            System.out.println("sam");
        };
        samInterface.run();

        /* 다중 추상메서드 i/f는 람다 X 컴파일 오류 !
        NotSamInterface notSamInterface = () -> {
            //Multiple non-overriding abstract methods found in NotSamInterface
        };
         */
    }
}
