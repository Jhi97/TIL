package hello.seccore;

import hello.seccore.discount.DiscountPolicy;
import hello.seccore.discount.FixDiscountPolicy;
import hello.seccore.discount.RateDiscountPolicy;
import hello.seccore.member.MemberRepository;
import hello.seccore.member.MemberService;
import hello.seccore.member.MemberServiceImpl;
import hello.seccore.member.MemoryMemberRepository;
import hello.seccore.order.OrderService;
import hello.seccore.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public MemberService memberService() {
        return new MemberServiceImpl(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public OrderService orderService() {
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }

    @Bean
    public DiscountPolicy discountPolicy() {
        return new FixDiscountPolicy();
    }
}
