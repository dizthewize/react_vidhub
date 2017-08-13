import React, { Component } from 'react';

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
      <div id="side-bar" className={this.state.active ? 'visible' : false }>
        <div id="side-btn" className="side-nav" onClick={this.toggleClass.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="navbar-items">
          <li className="nav-item"><a href="">Home</a></li>
          <li className="nav-item"><a href="">About</a></li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
