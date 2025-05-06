import useInput from '../hooks/useInput';
/** 세 가지 hook 관련된 팁
 * 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
 * 2. 조건부로 호출될 수 없다.
 * 3. 커스텀 훅을 직접 만들 수 있다.
 */

//const state = useState(); 오류 발생

// hooks/useInput.jsx로 이동
// function useInput() {
//   /* 1번 조건에 위배되나, 리액트에서는 use 접두사를 사용한 함수는 Custom Hook 으로 판단함 */
//   const [input, setInput] = useState('');

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, onChange];
// }

export default function HookExam() {
  /* 2번 팁 예시 */
  // if (true) {
  //   const state = useState();
  // }

  // for(let i =0; i<10; i++) {
  //   const state = useState();
  // }

  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
}
