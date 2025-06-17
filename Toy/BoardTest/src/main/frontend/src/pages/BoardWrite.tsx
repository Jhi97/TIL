import {useNavigate} from "react-router-dom";
import apiClient from "../api/axiosConfig";
import BoardForm from "../components/BoardForm";

const BoardWrite: React.FC = () => {

    const navigate = useNavigate();

    const onClickWrite = async (board: { title: string; content: string; author: string; }) => {
        try {
            const response = await apiClient.post('/boards', board);
            alert('게시글이 성공적으로 작성되었습니다.');
            navigate(`/board/${response.data.id}`);
        } catch (error) {
            console.error('게시갈 작성에 실패했습니다.', error);
        }
    };
    return (
        <div>
            <h2>글 작성</h2>
            <BoardForm onSubmit={onClickWrite}/>
        </div>
    )
}

export default BoardWrite;