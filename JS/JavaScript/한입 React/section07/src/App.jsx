import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);

  //1. Mount : 탄생 (빈 배열 전달 시)
  useEffect(() => {
    console.log('Mount');
  }, []);

  //2. Update : 변화, 리렌더링 (배열 전달 X)
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('Update');
  });

  //3. unMount : 죽음

  const onClickButton = (value) => {
    console.log(value);
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
