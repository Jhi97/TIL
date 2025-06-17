import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiClient from "../api/axiosConfig";
import BoardForm from "../components/BoardForm";

interface BoardData {
    title: string;
    content: string;
    author: string;
}


const BoardEdit: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<BoardData | undefined>(undefined);

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const response = await apiClient.get(`/boards/${id}`);
                setInitialData(response.data);
            } catch (error) {
                console.error('게시글 정보를 불러오는 데 실패했습니다.', error);
            }
        };
        if (id) {
            fetchBoard();
        }
    }, [id]);

    const onClickEdit = async (board: { title: string; content: string; author: string; }) => {
        try {
            await apiClient.put(`boards/${id}`, board);
            alert('게시글이 성공적으로 수정되었습니다.');
            navigate(`/board/${id}`);
        } catch (error) {
            console.error('게시글 수정에 실패했습니다.', error)
        }
    }

    return (
        <div>
            <h2>글 수정</h2>
            {initialData ? (
                <BoardForm onSubmit={onClickEdit} initialData={initialData} />
            ) : (
                <p>로딩중...</p>
            )}
        </div>
    )
}

export default BoardEdit;