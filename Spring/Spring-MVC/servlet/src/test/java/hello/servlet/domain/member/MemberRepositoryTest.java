package hello.servlet.domain.member;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

class MemberRepositoryTest {

    MemberRepository memberRepository = MemberRepository.getInstance();

    @AfterEach
    void afterEach(){
        memberRepository.clearStore();
    }

    @Test
    void save() {
        Member member = new Member("Jeon", 29);
        Member savedMember = memberRepository.save(member);
        Member findMember = memberRepository.findById(savedMember.getId());

        Assertions.assertThat(member).isSameAs(findMember);
    }

    @Test
    void findAll() {
        Member member1 = new Member("Jeon", 29);
        Member member2 = new Member("Bae", 29);

        memberRepository.save(member1);
        memberRepository.save(member2);

        List<Member> all = memberRepository.findAll();
        Assertions.assertThat(all.size()).isEqualTo(2);

    }




}