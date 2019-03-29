import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done : false,
    important: false,
  };

    handlerClickLabel = (e) => {
      this.setState( ({ done }) => ({
        done : !done,
      }) );
    };

    handlerClickImportant = (e) => {
      this.setState( ({ important }) => ({
        important : !important,
      }) );
    };
  render () {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let classNames = 'todo-list-item';
    if (done) classNames += ' done';
    if (important) classNames += ' important';
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.handlerClickLabel }>
          {label}
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.handlerClickImportant}>
          <i className="fa fa-exclamation" />
        </button>
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDeleted}>
              <i className="fa fa-trash-o" />
          </button>
      </span>
    );
  };
};
