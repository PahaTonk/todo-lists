import React from 'react';
import TodoList from './../todo-list';
import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import './app.css';

const App = () => {

  const todoData = [
    {label : 'Drink Coffee', important : false, key : 'item-1'},
    {label : 'Make Awesome App', important : true, key : 'item-2'},
    {label : 'Have a lunch', important : false, key : 'item-3'},
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo="1" done="3"/>
      <div className="todo-panel d-flex">
        <SearchPanel />
        <TodoList todos={todoData} />
      </div>
    </div>
  );
};

export default App;
