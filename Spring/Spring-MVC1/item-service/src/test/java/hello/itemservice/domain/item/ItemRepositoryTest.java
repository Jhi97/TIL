package hello.itemservice.domain.item;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

class ItemRepositoryTest {

    ItemRepository repository = new ItemRepository();

    @AfterEach
    void afterEach() {
        repository.clearStore();
    }

    @Test
    void save() {
        Item itemA = new Item("itemA", 10000, 10);
        repository.save(itemA);
        Item findItem = repository.findById(itemA.getId());
        assertThat(itemA).isEqualTo(findItem);
    }

    @Test
    void findAll() {
        Item itemA = new Item("itemA", 10000, 10);
        Item itemB = new Item("itemB", 20000, 20);

        repository.save(itemA);
        repository.save(itemB);

        List<Item> items = repository.findAll();
        assertThat(items.size()).isEqualTo(2);
        assertThat(items).contains(itemA, itemB);
    }

    @Test
    void updateItem() {
        Item itemA = new Item("itemA", 10000, 10);

        repository.save(itemA);

        itemA.setItemName("itemB");
        itemA.setPrice(20000);
        itemA.setQuantity(20);

        repository.update(itemA.getId(), itemA);
        Item findItem = repository.findById(itemA.getId());

        assertThat(findItem.getItemName()).isEqualTo(itemA.getItemName());
        assertThat(findItem.getPrice()).isEqualTo(itemA.getPrice());
        assertThat(findItem.getQuantity()).isEqualTo(itemA.getQuantity());
    }

}