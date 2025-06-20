package org.type.boardtest.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.type.boardtest.domain.Board;
import org.type.boardtest.domain.Comment;
import org.type.boardtest.repository.BoardRepository;
import org.type.boardtest.repository.CommentRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;

    @Transactional(readOnly = true)
    public List<Comment> findComments(Long boardId) {
        return commentRepository.findAllByBoardId(boardId);
    }

    @Transactional
    public Comment createComment(Long boardId, Comment comment) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(()-> new IllegalArgumentException("댓글 작성 실패 : 해당 게시글이 없습니다. id=" +boardId));
        comment.setBoard(board);
        return commentRepository.save(comment);
    }

    @Transactional
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }


}
