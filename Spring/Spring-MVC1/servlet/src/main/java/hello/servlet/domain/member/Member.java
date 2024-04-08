package hello.servlet.domain.member;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Member {

    private Long Id;
    private int age;
    private String username;

    public Member() { }

    public Member(int age, String username) {
        this.age = age;
        this.username = username;
    }
}
