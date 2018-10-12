import React, { Component } from 'react';
import { SearchBox } from './styles';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <SearchBox type="search" />
      </div>
    );
  }
}

export default SearchBar;
