import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiClient from "../api/axiosConfig";
import {Button, Card} from "react-bootstrap";
import React from "react";

interface BoardDetail {
    id: number;
    title: string;
    content: string;
    author: string;
}

const BoardDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [board, setBoard] = useState<BoardDetail | null>(null);

    useEffect(()=>{
        if (id) {
            fetchBoard();
        }
    }, [id]);

    const fetchBoard = async () => {
        try {
            const response = await apiClient.get(`/boards/${id}`);
            setBoard(response.data);
        } catch (error) {
            console.error('게시글을 불러오는데 실패했습니다.', error);
            alert('게시글을 찾을 수 없습니다.');
            navigate('/');
        }
    };

    const onClickDelete = async () => {
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

    // 데이터 로딩중 표기
    if (!board) return <div>로딩중...</div>;

    return (
        <Card>
            <Card.Header as={"h5"}>{board.title}</Card.Header>
            <Card.Body>
                <Card.Title>작성자: {board.author}</Card.Title>
                <Card.Text style={{minHeight: '200px'}}>
                    {board.content.split('\n').map((line,index)=>(
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </Card.Text>
                <Link to={"/"}><Button variant={"secondary"}>목록</Button> </Link>{' '}
                <Link to={`/edit/${id}`}><Button variant={"info"}>수정</Button> </Link>{' '}
                <Button variant={"danger"} onClick={onClickDelete}>삭제</Button>
            </Card.Body>
        </Card>
    )
}

export default BoardDetail;