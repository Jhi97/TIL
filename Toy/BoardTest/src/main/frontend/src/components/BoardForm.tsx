import {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";

interface BoardFormProps {
    onSubmit: (board: { title: string; content: string; author: string; }) => void;
    initialData?: { title: string; content: string; author: string; };
}

const BoardForm: React.FC<BoardFormProps> = ({onSubmit, initialData}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    // initialData가 변경될 때 (수정 폼으로 사용될 때)
    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
            setAuthor(initialData.author);
        }
    }, [initialData]);

    const onClickSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        onSubmit({title, content, author});
    }

    return (
        <Form onSubmit={onClickSubmit}>
            <Form.Group className={"mb-3"} controlId={"formTitle"}>
                <Form.Label>제목</Form.Label>
                <Form.Control type={"text"} placeholder={"제목을 입력하세요"} value={title}
                              onChange={e => setTitle(e.target.value)}
                              required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>작성자</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="이름을 입력하세요"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    readOnly={!!initialData} // initialData가 있으면(수정 모드이면) 읽기 전용으로 만듭니다.
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>내용</Form.Label>
                <Form.Control
                    as="textarea" // <textarea> 태그로 렌더링합니다.
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </Form.Group>

            {/* initialData의 존재 여부에 따라 버튼 텍스트를 동적으로 변경합니다. */}
            <Button variant="primary" type="submit">
                {initialData ? '수정하기' : '작성하기'}
            </Button>
        </Form>
    )
};

export default BoardForm;