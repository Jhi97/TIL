package org.type.boardtest.controller;


import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.type.boardtest.domain.Board;
import org.type.boardtest.dto.BoardDto;
import org.type.boardtest.service.BoardService;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/boards")
@CrossOrigin(origins = "http://localhost:3000") // CORS 허용
public class BoardController {

    private final BoardService boardservice;

    //전체 게시글 목록 조회
    @GetMapping
    public ResponseEntity<List<BoardDto>> getBoardList() {
        List<BoardDto> boardDtoList = boardservice.findBoards().stream().map(BoardDto::from).collect(Collectors.toList());

        return ResponseEntity.ok(boardDtoList);
    }

    //단일 게시글 조회
    @GetMapping("/{id}")
    public ResponseEntity<BoardDto> getBoard(@PathVariable Long id) {
        Board board = boardservice.findBoard(id);
        return ResponseEntity.ok(BoardDto.from(board));
    }

    //게시글 생성
    @PostMapping
    public ResponseEntity<BoardDto> createBoard(@RequestBody BoardDto boardDto) {
        Board board = new Board();
        board.setTitle(boardDto.getTitle());
        board.setContent(boardDto.getContent());
        board.setAuthor(boardDto.getAuthor());
        Board createdBoard = boardservice.createBoard(board);
        return ResponseEntity.status(HttpStatus.CREATED).body(BoardDto.from(createdBoard));
    }

    //게시글 수정
    @PutMapping("/{id}")
    public ResponseEntity<BoardDto> updatedBoard(@PathVariable Long id, @RequestBody BoardDto boardDto) {
        Board board = new Board();
        board.setTitle(boardDto.getTitle());
        board.setContent(boardDto.getContent());
        Board updateBoard = boardservice.updateBoard(id, board);
        return ResponseEntity.ok(BoardDto.from(updateBoard));
    }

    //게시글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
        boardservice.deleteBoard(id);
        return ResponseEntity.noContent().build();
    }
}
