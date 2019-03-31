import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label : '',
  };

  hanlerLabelChange = ({ target }) => {
    this.setState({
      label : target.value,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label : ''
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="item-add-form d-flex" onSubmit={this.handlerSubmit}>
        <input type="text" className="form-control form-text"
               onChange={this.hanlerLabelChange}
               placeholder="What needs to be done"
               value={label}/>
        <input type="submit" className="btn btn-outline-secondary form-submit"
                value="Add Item" />
      </form>
    )
  };
};
