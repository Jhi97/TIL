package hello.itemservice.domain;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ItemRepositoryTest {

    ItemRepository itemRepository = new ItemRepository();

    @AfterEach
    void afterEach() {
        itemRepository.clearStore();
    }

    @Test
    void save() {

        Item itemA = new Item("itemA", 10000, 1);
        Item save = itemRepository.save(itemA);
        Item findItem = itemRepository.findById(save.getId());

        Assertions.assertThat(save).isEqualTo(findItem);
    }

    @Test
    void findAll() {
        Item itemA = new Item("itemA", 10000, 1);
        Item itemB = new Item("itemB", 20000, 2);

        itemRepository.save(itemA);
        itemRepository.save(itemB);

        List<Item> items = itemRepository.findAll();

        Assertions.assertThat(items.size()).isEqualTo(2);

    }

    @Test
    void update() {

        Item itemA = new Item("itemA", 10000, 1);
        Item savedItem = itemRepository.save(itemA);
        savedItem.setPrice(20000);
        savedItem.setItemName("itemB");
        savedItem.setQuantity(2);

        itemRepository.update(savedItem.getId(), savedItem);

        Assertions.assertThat(savedItem.getPrice()).isEqualTo(20000);
    }
}