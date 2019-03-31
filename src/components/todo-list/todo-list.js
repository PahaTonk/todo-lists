import React from 'react';
import TodoListItem from './../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  // const filterTodos = todos.filter();
  return (
    <ul className="list-group todo-list">
    {todos.map( (item, i) => {
      const { key, ...itemProps } = item;
      return <li key={key} className="list-group-item">
                <TodoListItem { ...itemProps }
                onDeleted={ () => onDeleted(key) }
                onToggleImportant={ () => onToggleImportant(key) }
                onToggleDone={ () => onToggleDone(key) }/>
              </li>
    } )}
    </ul>
  );
};

export default TodoList;
