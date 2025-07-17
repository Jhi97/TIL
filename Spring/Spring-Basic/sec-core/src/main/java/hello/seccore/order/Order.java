package hello.seccore.order;

public class Order {

    private Long memberId;
    private String itemName;
    private int itemPrice;
    private int discountPrice;

    public Order(Long memberId, int itemPrice, String itemName, int discountPrice) {
        this.memberId = memberId;
        this.itemPrice = itemPrice;
        this.itemName = itemName;
        this.discountPrice = discountPrice;
    }

    public int calculatePrice() {
        return itemPrice-discountPrice;
    }

    public int getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(int discountPrice) {
        this.discountPrice = discountPrice;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(int itemPrice) {
        this.itemPrice = itemPrice;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    @Override
    public String toString() {
        return "Order{" +
                "memberId=" + memberId +
                ", itemPrice=" + itemPrice +
                ", itemName='" + itemName + '\'' +
                ", discountPrice=" + discountPrice +
                '}';
    }
}
