import { useState } from 'react';

export default function useInput() {
  /* 1번 조건에 위배되나, 리액트에서는 use 접두사를 사용한 함수는 Custom Hook 으로 판단함 */
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}
