// Props 는 객체임
// Props로 태그(컴포넌트도 가능)를 던지면 children으로 자식컴포넌트에서 받을 수 있음
export default function Button({ children, text, color = 'black' }) {
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}
