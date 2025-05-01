import './Main.css';

/**
 * JSX 주의사항
 * 1.중괄호 내부에는 자바스크립트 표현식만 작성 가능
 * 2.숫자, 문자열, 배열 값만 정상 렌더링 가능
 * 3.모든 태그는 닫혀있어야 한다.
 * 4.최상위 태그는 반드시 하나여야 한다.
 */
/*
const Main = () => {
  const number = 10;

  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? '짝수' : '홀수'}</h2>
      {true}
    </main>
  );
};
*/

const Main = () => {
  const user = {
    name: 'TEST',
    isLogin: false,
  };
  return (
    <>
      {user.isLogin ? (
        <div style={{ backgroundColor: 'red', borderBottom: '5px solid blue' }}>
          로그아웃
        </div>
      ) : (
        <div className="logIn">로그인</div>
      )}
    </>
  );
};

export default Main;
