package org.type.boardtest.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.type.boardtest.domain.Board;
import org.type.boardtest.repository.BoardRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardRepository boardRepository;

    //게시글 목록 조회
    @Transactional(readOnly = true)
    public List<Board> findBoards() {
        return boardRepository.findAll();
    }

    //단일 게시글 조회
    @Transactional(readOnly = true)
    public Board findBoard(Long id) {
        return boardRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
    }

    //게시글 작성
    @Transactional
    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }

    //게시글 수정
    @Transactional
    public Board updateBoard(Long id, Board requestBoard) {
        Board board = boardRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
        board.setTitle(requestBoard.getTitle());
        board.setContent(requestBoard.getContent());
        return board;
    }

    //게시글 삭제
    @Transactional
    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }
}
