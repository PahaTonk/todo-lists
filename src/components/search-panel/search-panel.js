import React from 'react';
import ItemStatusFilter from './../item-status-filter'
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="d-flex search-panel">
      <input className="search-input" placeholder="search" />
      <ItemStatusFilter />
    </div>
  )
}

export default SearchPanel;
