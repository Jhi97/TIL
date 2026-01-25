import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const params = useParams(); //router에서 인식된 파라미터 받아오는 hook
  const id = params.id;

  const { data, isLoading, error } = useTodoDataById(String(id));

  if (isLoading) return <div>로딩 중 입니다...</div>;
  if (error || !data) return <div>오류가 발생했습니다.</div>;

  return <div>{data.content}</div>;
}
