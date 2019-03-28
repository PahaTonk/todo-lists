import React from 'react';
import TodoListItem from './../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group todo-list">
    {todos.map( (item, i) => {
      const { key, ...itemProps } = item;
      return <li key={key} className="list-group-item">
                <TodoListItem { ...itemProps } />
              </li>
    } )}
    </ul>
  );
};

export default TodoList;