import React, { Component } from 'react';
import SideBar from './nav/side_bar';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <nav className="nav-bar">
        <SideBar />
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </nav>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
