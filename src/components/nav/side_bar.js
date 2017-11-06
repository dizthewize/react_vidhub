import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const currState = this.state.active;
    this.setState({ active: !currState });
  }

  render() {
    return (
      <div id="side-bar" className={this.state.active ? 'visible' : null }>
        <div id="side-btn" className="side-nav" onClick={this.toggleClass.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="navbar-items">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
