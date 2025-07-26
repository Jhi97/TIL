package hello.seccore.discount;

import hello.seccore.member.Grade;
import hello.seccore.member.Member;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("mainDiscountPolicy")
public class RateDiscountPolicy implements DiscountPolicy{

    private int discountPolicy = 10;

    @Override
    public int discount(Member member, int price) {

        if (member.getGrade() == Grade.VIP) {
            return price * discountPolicy / 100;
        } else  {
            return 0;
        }
    }
}
