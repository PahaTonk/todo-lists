import React, { Component } from 'react';
import TodoList from './../todo-list';
import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import ItemAddForm from './../item-add-form';
import './app.css';

export default class App extends Component {
  maxKey = 1;
  state = {
    todoData : [
      this.createTodoItem(`Drink Coffee`),
      this.createTodoItem(`Make Awesome App`),
      this.createTodoItem(`Have a lunch`),
    ],
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      key: `item-${this.maxKey++}`
    };
  };

  handlerClickDelete = (key) => {
    this.setState( ({ todoData }) => ({
      todoData : todoData.filter( (item) => item.key !== key )
    }) );
  }

  handlerClickAddItem = (text) => {
    this.setState( ({ todoData }) => ({
      todoData : todoData.concat(this.createTodoItem(`New item`))
    }) );
  }

  toggleProperty(arr, key, propName) {
    /////>?????????????????????????????????????????????/
  }

  handlerToggleImportant = (key) => {
    this.setState( ({ todoData }) => {
      let todoDataItems = [...todoData];
      todoDataItems.map( (item) => item.key === key ? item.important = !item.important : false );
      return {
        todoData : [
          ...todoDataItems
        ],
      };
    } );
  }

  handlerToggleDone = (key) => {
    this.setState( ({ todoData }) => {
      let todoDataItems = [...todoData];
      todoDataItems.map( (item) => item.key === key ? item.done = !item.done : false );
      return {
        todoData : [
          ...todoDataItems
        ],
      };
    } );
  }

  render() {
    const { todoData } = this.state;
    const todoDoneList = todoData.filter( (item) => item.done ).length;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoData.length - todoDoneList} done={todoDoneList}/>
        <div className="todo-panel d-flex">
          <SearchPanel />
          <TodoList todos={todoData}
                    onDeleted={this.handlerClickDelete}
                    onToggleImportant={this.handlerToggleImportant}
                    onToggleDone={this.handlerToggleDone}/>
          <ItemAddForm onAddItem={this.handlerClickAddItem} />
        </div>
      </div>
    );
  }
}
