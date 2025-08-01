package hello.itemservice.domain;

import lombok.Data;

@Data
//실무에서는 되도록 @Getter @Setter 사용
public class Item {

    private Long id;
    private String itemName;
    private Integer price;
    private Integer quantity;

    public Item() {
    }

    public Item(String itemName, Integer price, Integer quantity) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }
}
