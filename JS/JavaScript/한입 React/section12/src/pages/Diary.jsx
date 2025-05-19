import { useParams } from 'react-router-dom';
// useParams : url에 입력된 파라미터 값을 가져오는 custom component
export default function Diary() {
  const params = useParams();
  return <div>{params.id}번째 일기입니다.</div>;
}
