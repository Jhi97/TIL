import { useSearchParams } from 'react-router-dom';
// url에 query param을 받아오는 custom component

export default function Home() {
  const [params, setParams] = useSearchParams();

  return <div>Home</div>;
}
