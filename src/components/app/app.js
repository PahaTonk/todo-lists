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
    oldTodoData : [],
    searchLabel : '',
    filterProperty : 'ALL',
  };

  componentWillMount() {
    this.setState( ({ todoData }) => ({
      oldTodoData : [...todoData],
    }) );
  };

 // function Component SearchPanel

  handlerChangeSearch = (label) => {
    let reg = new RegExp(`${label}`, 'i');
    this.setState( ({ oldTodoData }) => ({
      todoData : oldTodoData.filter( (item) => item.label.search(reg) !== -1 ),
      searchLabel : label,
    }) );
    if (this.state.filterProperty !== 'ALL') {
      this.handlerClickFilter(this.state.filterProperty);
    }
  };

  handlerClickFilter = (property) => {
    switch (property) {
      case 'ALL' :
        this.setState( ({ oldTodoData, searchLabel }) => ({
          todoData : oldTodoData.filter( (item) => item.label.search(new RegExp(`${searchLabel}`, 'i')) !== -1 ),
          filterProperty : 'ALL',
        }) ); break;
      case 'ACTIVE' :
        this.setState( ({ oldTodoData, searchLabel }) => ({
          todoData : oldTodoData.filter( (item) => !item.done && item.label.search(new RegExp(`${searchLabel}`, 'i')) !== -1 ),
          filterProperty : 'ACTIVE',
        }) ); break;
      case 'DONE' :
        this.setState( ({ oldTodoData, searchLabel }) => ({
          todoData : oldTodoData.filter( (item) => item.done && item.label.search(new RegExp(`${searchLabel}`, 'i')) !== -1 ),
          filterProperty : 'DONE',
        }) ); break;
      default :
        this.setState( ({ oldTodoData, searchLabel }) => ({
          todoData : oldTodoData.filter( (item) => item.label.search(new RegExp(`${searchLabel}`, 'i')) !== -1 ),
          filterProperty : 'ALL',
        }) );
    };
  };

 // function Component TodoList
  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      key: `item-${this.maxKey++}`
    };
  };

  handlerClickDelete = (key) => {
    this.setState( ({ todoData, oldTodoData }) => ({
      todoData : todoData.filter( (item) => item.key !== key ),
      oldTodoData : oldTodoData.filter( (item) => item.key !== key ),
    }) );
  };

  toggleProperty(arr, key, propName) {
      let arrItems = [...this.state[arr]];
      arrItems.map( (item) => item.key === key ? item[propName] = !item[propName] : false );
      return arrItems;
  };

  handlerToggleImportant = (key) => {
    this.setState( ({ todoData }) => ({
      todoData : this.toggleProperty('todoData', key, 'important'),
    }) );
  };

  handlerToggleDone = (key) => {
    this.setState( ({ todoData, }) => ({
      todoData : this.toggleProperty('todoData', key, 'done'),
    }) );
    this.handlerClickFilter(this.state.filterProperty);
  };

  // function Component ItemAddForm

  handlerClickAddItem = (text) => {
    this.setState( ({ todoData, oldTodoData }) => ({
      todoData : todoData.concat(this.createTodoItem(text)),
      oldTodoData : oldTodoData.concat(this.createTodoItem(text)),
    }) );
  }

  render() {
    const { todoData, oldTodoData } = this.state;
    const todoDoneList = oldTodoData.filter( (item) => item.done ).length;
    return (
      <div className="todo-app">
        <AppHeader toDo={oldTodoData.length - todoDoneList} done={todoDoneList}/>
        <div className="todo-panel d-flex">
          <SearchPanel onSearch={this.handlerChangeSearch}
                       onFilterButton={this.handlerClickFilter}/>
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
