package hello.seccore.order;

import hello.seccore.discount.DiscountPolicy;
import hello.seccore.member.Member;
import hello.seccore.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class OrderServiceImpl implements OrderService{

    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy;

    public OrderServiceImpl(MemberRepository memberRepository, @Qualifier("mainDiscountPolicy") DiscountPolicy discountPolicy) {
        this.discountPolicy = discountPolicy;
        this.memberRepository = memberRepository;
    }

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {

        Member findMember = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(findMember, itemPrice);

        return new Order(memberId, itemPrice, itemName, discountPrice);
    }

    public MemberRepository getMemberRepository() {
        return memberRepository;
    }

    public DiscountPolicy getDiscountPolicy() {
        return discountPolicy;
    }
}
