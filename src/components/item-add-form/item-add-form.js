import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  render() {
    const { onAddItem } = this.props;
    return (
      <div className="item-add-form">
        <button type="button" className="btn btn-outline-secondary" onClick={() => onAddItem('New work')}>Add Work</button>
      </div>
    )
  }
}
