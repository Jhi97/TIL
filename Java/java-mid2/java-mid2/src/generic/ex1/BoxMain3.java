package generic.ex1;

public class BoxMain3 {
    public static void main(String[] args) {


        //생성시점에 T의 타입 결정
        GenericBox<Integer> integerBox = new GenericBox<>();
        integerBox.set(10);
        //integerBox.set("test"); //Integer 허용, 컴파일 오류
        Integer integer = integerBox.get(); //Integer로 리턴
        System.out.println("integer = " + integer);

        GenericBox<String> stringBox = new GenericBox<>();
        stringBox.set("test");
//        stringBox.set(10);
        String str = stringBox.get();
        System.out.println("str = " + str);

        //타입 추론
        GenericBox<Integer> integerBox2 = new GenericBox<>();
    }
}
