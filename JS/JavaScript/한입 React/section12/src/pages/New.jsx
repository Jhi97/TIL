import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

export default function New() {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const onSubit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    nav('/', {replace: true})
  };

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'< 뒤로가기'}
          />
        }
      />
      <Editor onSubmit={onSubit} />
    </div>
  );
}
