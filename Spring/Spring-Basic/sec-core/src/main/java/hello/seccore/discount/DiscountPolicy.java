package hello.seccore.discount;

import hello.seccore.member.Member;

public interface DiscountPolicy {

    /**
     * 할인 대상금액
     */
    int discount(Member member, int price);
}
