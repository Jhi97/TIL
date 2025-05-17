import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '출근하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '데이트하기',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
  }
}

// export const TodoContext = createContext();
/** 변화하는 객체, 변화하지 않는 객체 Context 분리 */
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };

    // //todos.push(newTodo) 로 추가 금지 -> 상태변화 감지를 위함
    // setTodos([newTodo, ...todos]);

    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    //todos State의 값들 중에
    //targetId와 일치한 id를 갖는 투두 아이템의 isDone 변경
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === targetId) {
    //       return {
    //         ...todo,
    //         isDone: !todo.isDone,
    //       };
    //     }
    //     return todo;
    //   })
    // );
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  // const onDelete = (targetId) => {
  //   // setTodos(todos.filter((todo) => todo.id !== targetId));
  //   dispatch({
  //     type: 'DELETE',
  //     targetId: targetId,
  //   });
  // };

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  /** 첫번째 인수로 전달된 함수를 그래도 생성하여 반환
   *  두번째 인수인 Deps가 변경될 때 다시 생성되도록 함
   *  (아무것도 전달하지 않은 경우, 최초 렌더링 시에만 생성 후 반환)
   */
  //const func = useCallback(() => {}, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todos }}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
