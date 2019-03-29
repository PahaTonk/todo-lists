import React, { Component } from 'react';
import TodoList from './../todo-list';
import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import ItemAddForm from './../item-add-form';
import './app.css';

export default class App extends Component {
  state = {
    todoData : [
      {label : 'Drink Coffee', important : false, key : 'item-1'},
      {label : 'Make Awesome App', important : true, key : 'item-2'},
      {label : 'Have a lunch', important : false, key : 'item-3'},
    ]
  };
  maxKey = 100;
  handlerClickDelete = (key) => {
    this.setState( ({ todoData }) => ({
      todoData : todoData.filter( (item) => item.key !== key )
    }) );
  }

  handlerClickAddItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      key: `item-${this.maxKey++}`
    }
    this.setState( ({ todoData }) => ({
      todoData : todoData.concat(newItem)
    }) );
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo="1" done="3"/>
        <div className="todo-panel d-flex">
          <SearchPanel />
          <TodoList todos={todoData}
                    onDeleted={this.handlerClickDelete}/>
          <ItemAddForm onAddItem={this.handlerClickAddItem} />
        </div>
      </div>
    );
  }
}
