package lambda.lambda5.mysteam;

import java.util.List;

public class MyStreamLoopMain {

    static void main() {
        List<Student> students = List.of(
                new Student("Apple", 100),
                new Student("Banana", 80),
                new Student("Barry", 50),
                new Student("Tomato", 40)
        );

        List<String> result1 = MyStream3.of(students)
                .filter(s -> s.getScore() >= 80)
                .map(Student::getName)
                .toList();

        for (String s : result1) {
            System.out.println("name = " + s);
        }

        //추가
        MyStream3.of(students)
                .filter(s -> s.getScore() >= 80)
                .map(Student::getName)
                .forEach(name -> System.out.println("name = " + name));

    }
}
