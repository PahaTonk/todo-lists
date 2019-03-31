import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  handlerClickButton = ({ target, target : {dataset} }) => {
    document.querySelector('.filter-buttons .active').classList.remove('active');
    target.classList.add('active');
    this.props.onFilterButton(dataset.target);
  }

  render() {

    return (
      <div className="btn-group filter-buttons" onClick={this.handlerClickButton}>
        <button type="button"
                className="btn btn-info active" data-target="ALL">All</button>
        <button type="button"
                className="btn btn-outline-secondary" data-target="ACTIVE">Active</button>
        <button type="button"
                className="btn btn-outline-secondary" data-target="DONE">Done</button>
      </div>
    );
  }
}
