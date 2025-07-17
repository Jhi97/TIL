package hello.seccore.discount;

import hello.seccore.member.Grade;
import hello.seccore.member.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RateDiscountPolicyTest {

    DiscountPolicy discountPolicy = new RateDiscountPolicy();

    @Test
    @DisplayName("VIP는 10% 할인이 적용되어야 한다")
    void vip_o() {
        Member memberA = new Member(1L, "memberA", Grade.VIP);
        int discountPrice = discountPolicy.discount(memberA, 10000);

        Assertions.assertThat(discountPrice).isEqualTo(1000);
    }

    @Test
    @DisplayName("VIP가 아니면 할인적용이 되지 않아야 한다")
    void vip_x() {
        Member memberB = new Member(1L, "memberB", Grade.BASIC);
        int discountPrice = discountPolicy.discount(memberB, 10000);

        Assertions.assertThat(discountPrice).isNotEqualTo(1000);
    }
}