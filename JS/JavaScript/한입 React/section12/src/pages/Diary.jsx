import { useParams, useNavigate } from "react-router-dom";
// useParams : url에 입력된 파라미터 값을 가져오는 custom component
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

export default function Diary() {
  const params = useParams();
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer />
    </div>
  );
}
