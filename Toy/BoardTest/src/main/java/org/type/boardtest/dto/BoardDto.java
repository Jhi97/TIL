package org.type.boardtest.dto;

import lombok.Getter;
import lombok.Setter;
import org.type.boardtest.domain.Board;

@Getter
@Setter
public class BoardDto {
    private Long id;
    private String title;
    private String content;
    private String author;

    // Entity -> DTO 변환
    public static BoardDto from(Board board) {
        BoardDto dto = new BoardDto();
        dto.setId(board.getId());
        dto.setTitle(board.getTitle());
        dto.setContent(board.getContent());
        dto.setAuthor(board.getAuthor());

        return dto;
    }
}
