package lambda.ex1;

public class M1After {
    public static void answer(String str) {
        System.out.println("=== 시작 ===");
        System.out.println(str);
        System.out.println("=== 끝 ===");
    }

    public static void main(String[] args) {
        answer("Good Morning!");
        answer("Good Afternoon!");
        answer("Good Evening!");
    }
}
