import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

export default function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChagneSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        onChange={onChagneSearch}
        value={search}
        placeholder="검색어를 입력하세요"
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
