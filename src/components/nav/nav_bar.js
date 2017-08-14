import React, { Component } from 'react';
import SideBar from './side_bar';

class NavBar extends Component {

  render() {
    return (
      <nav className="nav-bar">
        <SideBar />
      </nav>
    );
  }
}

export default NavBar;
