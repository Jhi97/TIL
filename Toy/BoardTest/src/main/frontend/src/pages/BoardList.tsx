import {useEffect, useState} from "react";
import apiClient from "../api/axiosConfig";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

interface Board {
    id: number;
    title: string;
    author: string;
}

const BoardList: React.FC = () => {
    const [boards, setBoards] = useState<Board[]>([]);

    useEffect(() => {
        fetchBoards();
    }, []);

    const fetchBoards = async () => {
        try {
            const response = await apiClient.get('/boards');
            setBoards(response.data);
        } catch (error) {
            console.error('게시글 목록을 불러오는 데 실패했습니다.', error);
        }
    }

    return (
        <div>
            <h2>게시판</h2>
            <Link to={"/write"}>
                <Button variant={"primary"} className={"mb-3"}>글쓰기</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
                </thead>
                <tbody>
                {boards.map((board) => (
                    <tr key={board.id}>
                        <td>{board.id}</td>
                        <td>
                            <Link to={`/board/${board.id}`}>{board.title}</Link>
                        </td>
                        <td>{board.author}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default BoardList;