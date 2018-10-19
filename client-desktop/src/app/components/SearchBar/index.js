import React, { Component } from 'react';
import { SearchBox } from './styles';

class SearchBar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <SearchBox type="search" placeholder="Search!" onChange={e => onChange(e.target.value)} />
    );
  }
}

export default SearchBar;
