package hello.seccore.autowired;

import hello.seccore.AutoAppConfig;
import hello.seccore.discount.DiscountPolicy;
import hello.seccore.member.Grade;
import hello.seccore.member.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

public class AllBeanTest {

    @Test
    void findAllBean() {
        ApplicationContext ac = new AnnotationConfigApplicationContext(AutoAppConfig.class, DiscountService.class);
        DiscountService discountService = ac.getBean(DiscountService.class);
        Member memberA = new Member(1L, "memberA", Grade.VIP);
        int discountPrice = discountService.discount(memberA, 10000, "fixDiscountPolicy");

        Assertions.assertThat(discountService).isInstanceOf(DiscountService.class);
        Assertions.assertThat(discountPrice).isEqualTo(1000);

        int discountPrice2 = discountService.discount(memberA, 20000, "rateDiscountPolicy");
        Assertions.assertThat(discountPrice2).isEqualTo(2000);
    }

    @Service
    static class DiscountService {

        private final Map<String, DiscountPolicy> policyMap;
        private final List<DiscountPolicy> policies;

        public DiscountService(List<DiscountPolicy> policies, Map<String, DiscountPolicy> policyMap) {
            this.policies = policies;
            this.policyMap = policyMap;

            System.out.println("policyMap = " + policyMap);
            System.out.println("policies = " + policies);
        }

        public int discount(Member member, int Price, String discountPolicy) {
            DiscountPolicy policy = policyMap.get(discountPolicy);
            return policy.discount(member, Price);

        }
    }
}
