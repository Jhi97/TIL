package org.type.boardtest.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Comment {
    @Id //기본 키 (PK) 필드임을 의미
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 값을 DB가 자동으로 생성하도록 설정
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false) // 컬럼의 타입을 TEXT로, null을 허용하지 않도록 설정합니다.
    private String content;

    private String author;


    //1:다 설정
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;
}

