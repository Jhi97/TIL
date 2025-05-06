import './App.css';

/*
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Button text={'메일'} color={'red'} />
      <Button text={'카페'}>
        <Header />
      </Button>
      <Button text={'블로그'}>
        <div>자식요소</div>
      </Button>
      <Footer />
    </>
  );
}
*/

/* 부모 컴포넌트가 변경될 때 자식 컴포넌트도 리렌더링 되므로 분리 실습
import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}
*/

import Register from './components/Register';
import HookExam from './components/HookExam';

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
