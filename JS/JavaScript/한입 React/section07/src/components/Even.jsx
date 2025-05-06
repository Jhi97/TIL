import { useEffect } from 'react';

export default function Even() {
  useEffect(() => {
    return () => {
      console.log('unMount');
    }; // 클린업, 정리함수
  }, []);
  return <div>짝수입니다.</div>;
}
