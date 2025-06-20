import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Card, Form, ListGroup, Stack } from 'react-bootstrap';
import apiClient from '../api/axiosConfig';

interface BoardDetailData {
    id: number;
    title: string;
    content: string;
    author: string;
}
interface Comment {
    id: number;
    content: string;
    author: string;
}
interface NewComment {
    content: string;
    author: string;
}

const BoardDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [board, setBoard] = useState<BoardDetailData | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<NewComment>({ content: '', author: '' });

    useEffect(() => {
        if (id) {
            fetchBoard();
            fetchComments();
        }
    }, [id]);

    const fetchBoard = async () => {
        try {
            const response = await apiClient.get(`/boards/${id}`);
            setBoard(response.data);
        } catch (error) {
            console.error('게시글을 불러오는 데 실패했습니다.', error);
            alert('게시글을 찾을 수 없습니다.');
            navigate('/');
        }
    };

    const fetchComments = async () => {
        try {
            const response = await apiClient.get(`/boards/${id}/comments`);
            setComments(response.data);
        } catch (error) {
            console.error('댓글 목록을 불러오는 데 실패했습니다.', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            try {
                await apiClient.delete(`/boards/${id}`);
                alert('삭제되었습니다.');
                navigate('/');
            } catch (error) {
                console.error('게시글 삭제에 실패했습니다.', error);
            }
        }
    };

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewComment(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCommentSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!newComment.content.trim() || !newComment.author.trim()) {
            alert('작성자와 내용을 모두 입력해주세요.');
            return;
        }
        try {
            await apiClient.post(`/boards/${id}/comments`, newComment);
            setNewComment({ content: '', author: '' });
            fetchComments();
        } catch (error) {
            console.error('댓글 작성에 실패했습니다.', error);
        }
    };

    const handleCommentDelete = async (commentId: number) => {
        if (window.confirm('댓글을 삭제하시겠습니까?')) {
            try {
                await apiClient.delete(`/comments/${commentId}`);
                setComments(comments.filter(comment => comment.id !== commentId));
            } catch (error) {
                console.error('댓글 삭제에 실패했습니다.', error);
            }
        }
    };

    if (!board) {
        return <div>로딩중...</div>;
    }

    return (
        <>
            <Card className="mb-4">
                <Card.Header as="h5">{board.title}</Card.Header>
                <Card.Body>
                    <Card.Title>작성자: {board.author}</Card.Title>
                    <Card.Text style={{ minHeight: '150px', whiteSpace: 'pre-wrap' }}>
                        {board.content}
                    </Card.Text>
                    <Link to="/"><Button variant="secondary">목록</Button></Link>{' '}
                    <Link to={`/edit/${id}`}><Button variant="info">수정</Button></Link>{' '}
                    <Button variant="danger" onClick={handleDelete}>삭제</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>댓글</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush" className="mb-3">
                        {comments.map(comment => (
                            <ListGroup.Item key={comment.id} className="d-flex justify-content-between align-items-start">
                                <div>
                                    <strong>{comment.author}</strong>
                                    <p className="mb-1">{comment.content}</p>
                                </div>
                                <Button variant="outline-danger" size="sm" onClick={() => handleCommentDelete(comment.id)}>삭제</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <Form onSubmit={handleCommentSubmit}>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Control
                                name="author"
                                value={newComment.author}
                                onChange={handleCommentChange}
                                placeholder="작성자"
                            />
                            <Form.Control
                                name="content"
                                value={newComment.content}
                                onChange={handleCommentChange}
                                placeholder="댓글을 입력하세요"
                            />
                            <Button variant="primary" type="submit">등록</Button>
                        </Stack>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default BoardDetail;