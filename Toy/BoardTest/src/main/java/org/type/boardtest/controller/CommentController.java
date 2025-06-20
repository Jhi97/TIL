package org.type.boardtest.controller;


import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.type.boardtest.domain.Comment;
import org.type.boardtest.dto.CommentDto;
import org.type.boardtest.service.CommentService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    private final CommentService commentService;

    @GetMapping("/boards/{boardId}/comments")
    public ResponseEntity<List<CommentDto>> getComments(@PathVariable Long boardId) {
        List<CommentDto> commentDtos = commentService.findComments(boardId).stream()
                .map(comment -> {
                    CommentDto dto = new CommentDto();
                    dto.setId(comment.getId());
                    dto.setContent(comment.getContent());
                    dto.setAuthor(comment.getAuthor());
                    return dto;
                }).collect(Collectors.toList());
        return ResponseEntity.ok(commentDtos);
    }

    @PostMapping("/boards/{boardId}/comments")
    public ResponseEntity<CommentDto> createComment(@PathVariable Long boardId, @RequestBody CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setContent(commentDto.getContent());
        comment.setAuthor(commentDto.getAuthor());
        Comment createdComment = commentService.createComment(boardId, comment);

        CommentDto responseDto = new CommentDto();
        responseDto.setId(createdComment.getId());
        responseDto.setContent(createdComment.getContent());
        responseDto.setAuthor(createdComment.getAuthor());

        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    @PostMapping("/comments/{commentsId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentsId) {
        commentService.deleteComment(commentsId);
        return ResponseEntity.noContent().build();
    }
}
