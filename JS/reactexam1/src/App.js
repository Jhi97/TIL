//import './App.css';
import MyHeader from './MyHeader';
import Counter from './Counter';
import Container from './Container';

function App() {
  let name = '전형일';

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue:  5,
  };

  return (
    //<div className="App">
    <Container>
      {/* <div style={style.App}>
        <MyHeader/>
        <Counter {...counterProps}/>
          <h2 style={style.h2}>안녕 리액트 {name}</h2>
          <b id="bold_text" style={style.bold_text}>
            {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
          </b>
      </div> */}
      <div>
        <MyHeader />
        <Counter {...counterProps}/>
      </div>
    </Container>
    
  );
}

export default App;
