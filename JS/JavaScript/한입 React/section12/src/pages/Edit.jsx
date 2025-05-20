import { useParams } from 'react-router-dom';

export default function Edit() {
  const params = useParams();
  return <div>{params.id}번째 일기입니다.</div>;
}
