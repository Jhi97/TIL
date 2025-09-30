package generic.ex1;

public class BoxMain2 {

    public static void main(String[] args) {
        ObjectBox objectBox = new ObjectBox();
        objectBox.set(10);
        Object obj = objectBox.get();
        Integer integer = (Integer) obj;
        System.out.println("integer = " + integer);

        ObjectBox stringBox = new ObjectBox();
        stringBox.set("hello");
        Object str = stringBox.get();
        System.out.println("str = " + str);
    }
}
