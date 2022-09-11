package hello.itemservice.domain;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ItemRepositoryTest {

    ItemRepository itemRepository = new ItemRepository();

    @AfterEach
    void AfterEach() {
        itemRepository.clearStore();
    }

    @Test
    void save() {
        Item item = new Item("item1", 10000, 10);
        Item savedItem = itemRepository.save(item);

        Assertions.assertThat(item).isEqualTo(item);
    }

    @Test
    void findAll() {
        //given
        Item item1 = new Item("item1", 10000, 10);
        Item item2 = new Item("item2", 20000, 20);
        itemRepository.save(item1);
        itemRepository.save(item2);
        //when
        List<Item> findList = itemRepository.findAll();
        //then
        Assertions.assertThat(findList.size()).isEqualTo(2);
    }

    @Test
    void update() {
        //given
        Item item1 = new Item("item1", 10000, 10);
        Item item2 = new Item("item2", 20000, 20);
        Item savedItem = itemRepository.save(item1);
        //when
        itemRepository.update(savedItem.getId(), item2);
        Item updatedItem = itemRepository.findById(savedItem.getId());
        //then
        Assertions.assertThat(updatedItem.getItemName()).isEqualTo(item2.getItemName());
        System.out.println(updatedItem.getItemName() + " " + updatedItem.getPrice());
    }
}