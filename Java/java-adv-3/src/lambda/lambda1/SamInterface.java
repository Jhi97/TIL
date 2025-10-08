package lambda.lambda1;

@FunctionalInterface
//함수형 인터페이스임을 보장하는 애노테이션
// 추상메서드가 추가되면 컴파일 오류
public interface SamInterface {
    void run();
}
