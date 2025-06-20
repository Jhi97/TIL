package org.type.boardtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.type.boardtest.domain.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByBoardId(Long boardId);
}
