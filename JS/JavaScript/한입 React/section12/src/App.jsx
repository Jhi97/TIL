import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

/**
 *
 * 1. "/" : 모든 일기를 조회하는 home 페이지
 * 2. "/new" : 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
 */

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/New'}>New</Link>
        <Link to={'/Diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button> */}

      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />
      <Button
        text={'123'}
        onClick={() => {
          console.log('123번 버튼 클릭');
        }}
      />

      <Button
        text={'2'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('2번 버튼 클릭');
        }}
      />

      <Button
        text={'3'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('3번 버튼 클릭');
        }}
      />

      {/*
        - Link가 필요할 때 -> Link 컴포넌트 사용,
        - 특정 조건에 따라 페이지 이동 -> useNavigate 컴포넌트 사용
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        {/* path에 * -> 와일드카드, 매칭되는 url이 없는 경우 *로 매핑 */}
      </Routes>
    </>
  );
}

export default App;
