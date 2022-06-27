//import './App.css';
import MyHeader from './MyHeader';

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

  const number = 4;

  return (
    //<div className="App">
    <div style={style.App}>
      <MyHeader/>
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
        <b id="bold_text" style={style.bold_text}>
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
    </div>
  );
}

export default App;
