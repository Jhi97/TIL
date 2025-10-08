package lambda.ex1;

public class M2After {
    public static void answer(int value, String unit) {
        System.out.println("무게: " + value + unit);
    }

    public static void main(String[] args) {
        answer(10, "kg");
        answer(50, "kg");
        answer(200, "g");
        answer(40, "g");
    }
}
