package org.type.boardtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.type.boardtest.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
    // JpaRepository<Board, Long> -> 기본적인 CURD 메서드 가 자동 생성됨

}
