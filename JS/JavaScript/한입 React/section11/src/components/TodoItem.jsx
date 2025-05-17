import './TodoItem.css';
import { TodoDispatchContext } from '../App';
import { memo, useContext } from 'react';

export default memo(
  function TodoItem({ id, isDone, content, date }) {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const onChangeCheckBox = () => {
      onUpdate(id);
    };

    const onClickDeleteButton = () => {
      onDelete(id);
    };
    return (
      <div className="TodoItem">
        <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    );
  }
  // (prevPops, nextProps) => {
  //   // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
  //   if (prevPops.id !== nextProps.id) return false;
  //   if (prevPops.isDone !== nextProps.isDone) return false;
  //   if (prevPops.date !== nextProps.date) return false;
  //   if (prevPops.content !== nextProps.content) return false;

  //   return true;
  // }
);
