import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

/**
 *
 * 1. "/" : 모든 일기를 조회하는 home 페이지
 * 2. "/new" : 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
 */

// const mokData = [
//   {
//     id: 1,
//     createDate: new Date("2025-05-21").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용",
//   },
//
//   {
//     id: 2,
//     createDate: new Date("2025-05-22").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 3,
//     createDate: new Date("2025-04-22").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용",
//   },
// ];

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, createDate, emotionId, content },
    });
  };

  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중...</div>;
  }

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

      {/*
        - Link가 필요할 때 -> Link 컴포넌트 사용,
        - 특정 조건에 따라 페이지 이동 -> useNavigate 컴포넌트 사용
      */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
            {/* path에 * -> 와일드카드, 매칭되는 url이 없는 경우 *로 매핑 */}
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
