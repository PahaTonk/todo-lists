import React, { Component } from 'react';
import ItemStatusFilter from './../item-status-filter'
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    label : ''
  }

handlerChangeLabel = ({ target :  { value } }) => {
  this.setState({
    label: value,
  });
  this.props.onSearch(value);
};

  render() {
    const { label } = this.state;
    return (
      <div className="d-flex search-panel">
        <input className="search-input"
               placeholder="search"
               onChange={this.handlerChangeLabel}
               value={label} />
        <ItemStatusFilter onFilterButton={this.props.onFilterButton}/>
      </div>
    );
  };
};
